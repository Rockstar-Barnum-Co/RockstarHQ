# RockstarHQ

**RockstarHQ** is the internal command center for [Rockstar Barnum & Co.](https://rockstarbarnum.com) — powering AI dashboards, partner portals, admin tools, and smart preservation tech.

> **"Classic American Industry meets Ancient Innovation."**

---

## 🚀 Deployment

### Vercel Integration
This project is configured for **Vercel auto-deployment** on push to the `main` branch.

1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Link this repository (`RockstarBarnumCo/RockstarHQ`) to your `rockstar-hq` project.
3. Set `main` as the **Production Branch** under:
   - `Settings > Git > Production Branch`
4. Add the following **Environment Variables** under:
   - `Settings > Environment Variables`

| Key                         | Example Value (placeholder)            |
|----------------------------|----------------------------------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `AIza...`                          |
| `FIREBASE_CLIENT_EMAIL`     | `firebase-adminsdk@project.iam.gserviceaccount.com` |
| `FIREBASE_PRIVATE_KEY`      | `-----BEGIN PRIVATE KEY-----\n...`     |
| `NEXTAUTH_SECRET`           | `your_nextauth_secret_here`           |
| `STRIPE_SECRET_KEY`         | `sk_test_...`

## Development Notes

These Firebase functions run on **Node.js 20**. Ensure that your local
environment matches this version when testing or deploying.
