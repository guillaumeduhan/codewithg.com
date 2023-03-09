# Codewithguillaume.com

# stripe-webhooks

## Setup env vars

- `cp supabase/functions/stripe-webhook/.env.example supabase/functions/stripe-webhook/.env`

## Test locally

Launch Docker first.

- Terminal 1:
  - `supabase functions serve --no-verify-jwt stripe-webhook --env-file ./supabase/functions/stripe-webhook/.env` or make supaserve
- Terminal 2:
  - `stripe listen --forward-to localhost:54321/functions/v1/` or make sl
- Terminal 3 (optional):
  - `stripe trigger payment_intent.succeeded`

## Deploy

- `supabase functions deploy --no-verify-jwt telegram-bot`
- `supabase secrets set --env-file ./supabase/functions/telegram-bot/.env`