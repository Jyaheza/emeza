# Emeza

Emeza is a payment middle man app for Rwanda's social commerce market.

Core promise: `Gura udatinya` / `Buy without fear`.

The product is designed around a simple escrow flow:

1. Buyer finds a product through a seller storefront
2. Buyer starts mobile money checkout
3. Emeza holds the payment state
4. Seller delivers
5. Buyer confirms receipt
6. Seller gets paid

## Current App Status

This repo currently includes:

- A branded landing page
- A seller onboarding flow
- A seller dashboard UI
- A buyer storefront UI with protected checkout modal
- Supabase-ready schema and seed data
- Seller profile persistence
- Order persistence for checkout initiation
- A Flutterwave placeholder step that currently displays: `HERE WE'LL HIT FLUTTERWAVE`

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Supabase

## Important Routes

- `/` home page
- `/sell` seller onboarding
- `/dashboard` seller dashboard
- `/store/joyce-style` sample storefront

API routes:

- `/api/storefronts/[slug]`
- `/api/sellers/profile`
- `/api/payments/initiate`
- `/api/orders/[id]/confirm-receipt`

## Supabase Setup

Create a `.env.local` file from `.env.example` and provide:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

Then apply the SQL files in this order:

1. `supabase/migrations/202603131710_init_emeza.sql`
2. `supabase/seed.sql`

The seed creates a sample seller and products for `joyce-style`.

## Seller Auth Flow

The seller onboarding flow uses Supabase phone OTP:

1. Seller enters phone number
2. Seller receives OTP
3. Seller verifies OTP
4. Seller creates business name and storefront slug
5. App saves the seller profile through `/api/sellers/profile`

If Supabase keys are missing, the UI will show a configuration warning instead of breaking.

## Order Persistence

`POST /api/payments/initiate` currently:

- validates request payload
- resolves seller and product
- creates or updates `buyer_sessions`
- inserts into `orders`
- inserts into `escrow_transactions`
- returns checkout metadata for the UI

If Supabase is not configured or seeded, it falls back to mock mode so the storefront still works visually.

## Flutterwave Placeholder

The checkout modal is intentionally not calling Flutterwave yet.

Right now the payment step stops after order creation and shows:

```text
HERE WE'LL HIT FLUTTERWAVE
```

That keeps the UX structure in place while we finish the backend shape first.

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Verification

These commands passed during setup:

```bash
npm run lint
npx next build --webpack
```

## Next Recommended Steps

- Connect the Flutterwave sandbox redirect in `/api/payments/initiate`
- Add seller product creation/editing backed by Supabase
- Add real seller session handling and gated dashboard data
- Add webhook handling for successful payment confirmation
- Add dispute submission and payout progression
