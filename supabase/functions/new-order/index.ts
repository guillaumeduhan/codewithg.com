// logs: https://supabase.com/dashboard/project/jpbegoqdzfcsctsvohia/functions/new-order/logs
// POUR LA PRODUCTION: ne pas oublier de switcher STRIPE_API_KEY_LIVE & STRIPE_WEBHOOK_SIGNING_SECRET
// POUR LA PRODUCTION: BESOIN D'UN WEBHOOk !
// TODO: essayer de switcher entre prod et staging ici, locale? deno n'aime pas l'env

import { serve } from "https://deno.land/std/http/server.ts";

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.0";
import Stripe from "https://esm.sh/stripe@13.8.0?target=deno&no-check";

const supUrl = Deno.env.get("_SUPABASE_URL") as string;
const supKey = Deno.env.get("_SUPABASE_SERVICE_KEY") as string;
const supabase = createClient(supUrl, supKey);
let message;

const headers = {
  "Content-type": "application/json",
  supasecret: "my_secret_telegram_brooooo",
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs`,
};

const sendMessage = async (msg: string) => {
  const response = await fetch(
    `https://jpbegoqdzfcsctsvohia.functions.supabase.co/telegram-bot?message=${msg}`,
    { headers }
  );
  return response ? response.json() : null;
};

const stripe: any = new Stripe(Deno.env.get("STRIPE_API_KEY_LIVE") as string, {
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});
const cryptoProvider: any = Stripe.createSubtleCryptoProvider();

console.log("✅ Supabase Function new-order running...");

serve(async (request: any) => {
  if (request.method === "OPTIONS") {
    return new Response("ok");
  }
  console.log("👍 Nouvelle requête...");

  const signature = request.headers.get("Stripe-Signature");

  if (!signature) {
    message = `❌ Pas de signature Stripe — hacker?`;
    console.log(message);
    await sendMessage(message);
    return new Response(null);
  }

  const body = await request.text();

  if (!body) {
    message = `❌ Pas de body — hacker?`;
    console.log(message);
    await sendMessage(message);
    return new Response(null);
  }
  let receivedEvent;

  try {
    receivedEvent = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      Deno.env.get("STRIPE_WEBHOOK_SIGNING_SECRET")!,
      undefined,
      cryptoProvider
    );
  } catch (error) {
    const { message: errMsg }: any = error;
    // message = `❌ Impossible de construire l'appel Stripe.`;
    // await sendMessage(message);
    // // @ts-ignore
    return new Response(errMsg);
  }

  const { type } = receivedEvent;

  if (!type) {
    message = `❌ Pas de type reçu de l'event — hacker?`;
    await sendMessage(message);
    return new Response(null, {
      status: 400,
    });
  }

  if (type === "checkout.session.completed") {
    const { object } = receivedEvent.data;
    const { id, customer_details, amount_total, metadata, payment_intent } =
      object;
    const _amount = parseInt(amount_total) / 100;
    if (
      !id &&
      !customer_details &&
      !amount_total &&
      !metadata &&
      !payment_intent
    ) {
      message = `❌ Modèle incomplet pour continuer.`;
      console.log(message);
      await sendMessage(message);
      return new Response(null, { status: 400 });
    }
    console.log("--------------------------------");

    let { data, error }: any = await supabase
      .from("orders")
      .insert({
        stripe_transaction_id: id,
        stripe_payment_intent: payment_intent,
        amount: _amount,
        email: customer_details.email || "no email",
        course_id: metadata.course_id,
      })
      .select()
      .single();

    if (error) {
      message = `❌ ${error.message}: ${customer_details.email}`;
      await sendMessage(message);
      return new Response(null);
    }

    console.log(data);

    // data ici
    const { amount, email } = data;
    await sendMessage(
      `💶 ${amount}€ — ${email} ${metadata.name ? "—" : ""} ${metadata.name}`
    );
    return new Response(null);
  }

  return new Response(null);
});
