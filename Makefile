gt:
	git add .
	git commit -m "commit"
	git push

# new order

# 1. create api webhook endpoint from supabase
# 2. update signing secret

# stripe login if api_key problem
sl:
	stripe listen --forward-to localhost:54321/functions/v1/

serve-new-order:
	supabase functions serve --no-verify-jwt new-order --env-file ./supabase/functions/new-order/.env

secrets-new-order:
	supabase secrets set --env-file ./supabase/functions/new-order/.env

deploy-new-order:
	supabase functions deploy --no-verify-jwt new-order 

stc:
	stripe trigger charge.succeeded --add checkout:receipt_email=test@yopmail.com --add checkout:currency=eur --add checkout:metadata.course_id=8d953dc4-8649-42c5-90ba-f36d4ccebfe8

# telegram-bot

serve-telegram:
	supabase functions serve telegram-bot --no-verify-jwt --env-file ./supabase/functions/telegram-bot/.env

secret-telegram:
	supabase secrets set --env-file ./supabase/functions/telegram-bot/.env

deploy-telegram:
	supabase functions deploy --no-verify-jwt telegram-bot
