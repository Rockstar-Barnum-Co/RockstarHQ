#!/bin/bash
# Deploy the project to Vercel using the CLI.
# Requires VERCEL_TOKEN environment variable and project is already linked.

set -euo pipefail

npx vercel deploy --prod --yes
