'use strict';

/**
 * Financial synchronization utilities for GitHub, Stripe and Chase APIs.
 * Each function pulls transaction data from the respective service and stores
 * normalized documents in the `financials` Firestore collection.
 */

const admin = require('firebase-admin');
const {onSchedule} = require('firebase-functions/v2/scheduler');
const Stripe = require('stripe');
const {Octokit} = require('@octokit/rest');
const axios = require('axios');

admin.initializeApp();
const db = admin.firestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});

/**
 * Upserts a batch of documents using Firestore BulkWriter.
 * @param {Array<Object>} docs Array of {id, data} items.
 * @return {Promise<void>}
 */
async function batchUpsert(docs) {
  const writer = db.bulkWriter();
  docs.forEach(({id, data}) => {
    const ref = db.collection('financials').doc(id);
    writer.set(ref, data, {merge: true});
  });
  await writer.close();
}

/**
 * Pull recent Stripe charges and store them in Firestore.
 */
async function syncStripe() {
  const charges = await stripe.charges.list({limit: 100});
  const docs = charges.data.map((c) => ({
    id: `stripe_${c.id}`,
    data: {...c, source: 'stripe'},
  }));
  await batchUpsert(docs);
}

/**
 * Pull GitHub sponsor events and store them in Firestore.
 */
async function syncGitHub() {
  const events = await octokit.rest.activity.listReceivedEventsForUser({
    username: process.env.GITHUB_SPONSOR_USER,
  });
  const docs = events.data.map((e) => ({
    id: `github_${e.id}`,
    data: {...e, source: 'github'},
  }));
  await batchUpsert(docs);
}

/**
 * Pull Chase transactions using a custom API endpoint and store them.
 * This function expects the environment variables CHASE_API_URL and
 * CHASE_API_TOKEN to be defined.
 */
async function syncChase() {
  const res = await axios.get(`${process.env.CHASE_API_URL}/transactions`, {
    headers: {Authorization: `Bearer ${process.env.CHASE_API_TOKEN}`},
  });
  const docs = res.data.transactions.map((t) => ({
    id: `chase_${t.id}`,
    data: {...t, source: 'chase'},
  }));
  await batchUpsert(docs);
}

/**
 * Cloud Function scheduled to run nightly. It synchronizes financial data from
 * Stripe, GitHub Sponsors, and Chase Bank.
 */
exports.financialSyncJob = onSchedule('every 24 hours', async () => {
  await Promise.all([
    syncStripe(),
    syncGitHub(),
    syncChase(),
  ]);
});

module.exports = {
  syncStripe,
  syncGitHub,
  syncChase,
};
