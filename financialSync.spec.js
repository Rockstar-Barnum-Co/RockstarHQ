const admin = require('firebase-admin');
const test = require('firebase-functions-test')();
const {syncStripe, syncGitHub, syncChase} = require('./financialSync');

describe('financial sync', () => {
  afterAll(() => {
    test.cleanup();
  });

  it('exports sync functions', () => {
    expect(typeof syncStripe).toBe('function');
    expect(typeof syncGitHub).toBe('function');
    expect(typeof syncChase).toBe('function');
  });
});
