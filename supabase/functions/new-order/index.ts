import { serve } from "https://deno.land/std/http/server.ts";

import Stripe from "https://esm.sh/stripe@11.8.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.0";

const supUrl = Deno.env.get("_SUPABASE_URL") as string;
const supKey = Deno.env.get("_SUPABASE_SERVICE_KEY") as string;
const supabase = createClient(supUrl, supKey);

const stripe = new Stripe(Deno.env.get("STRIPE_API_KEY") as string, {
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});
const cryptoProvider = Stripe.createSubtleCryptoProvider();

console.log("✅ Supabase Function new-order running...");

const headers = {
  "Content-type": "application/json",
  supasecret: "my_secret_telegram_brooooo",
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs`,
};

const sendMessage = async (message: string) => {
  return await supabase.functions.invoke("telegram-bot", {
    headers,
    body: JSON.stringify({
      message,
    }),
  });
};

serve(async (request: any) => {
  const signature = request.headers.get("Stripe-Signature");
  let message;

  // First step is to verify the event. The .text() method must be used as the
  // verification relies on the raw request body rather than the parsed JSON.
  const body = await request.text();

  if (!body) {
    message = `❌ Body n'a pas été transformé en text.`;
    await sendMessage(message);
    return new Response(message, { status: 400 });
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
  } catch (err) {
    message = `❌ Impossible de construire l'appel Stripe.`;
    await sendMessage(message);
    return new Response(message, { status: 400 });
  }

  const { type } = receivedEvent;

  // there are 4 events, we want to catch only 1 to record only 1 order
  if (type === "checkout.session.completed") {
    console.log("okay celui-là c'est bon");
    console.log("--------------------------------");
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
      let message = `❌ Modèle incomplet pour continuer.`;
      await sendMessage(message);
      return new Response(message, { status: 400 });
    }
    const new_order: any = {
      stripe_transaction_id: id,
      stripe_payment_intent: payment_intent,
      amount: _amount,
      email: customer_details.email || "no email",
      course_id: metadata.course_id,
    };
    console.log("--------------------------------");
    let { error } = await supabase.from("orders").insert(new_order);

    if (error) {
      let message = `❌ Erreur enregistrement Supabase commande: ${id}`;
      await sendMessage(message);
      return new Response(message, { status: 400 });
    }

    message = `💶 ${new_order.amount}€ — ${new_order.email}`;
    await sendMessage(message);

    return new Response(message, { status: 200 });
  }

  // message =
  //   "❌ Transaction inhabituelle, sans entrer dans checkout.session.completed. Checker Stripe!";
  // await sendMessage(message);

  return new Response(message, { status: 400 });
});
