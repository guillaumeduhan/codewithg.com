// jpbegoqdzfcsctsvohia

import { serve } from "https://deno.land/std/http/server.ts";

import {
  Bot,
  webhookCallback,
} from "https://deno.land/x/grammy@v1.14.1/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));

const handleUpdate = webhookCallback(bot, "std/http");

console.log(`Bot is running bro!`);

const channel_id = "-1001710117883";

serve(async (req: Request) => {
  try {
    if (
      !req.headers.get("supasecret") &&
      req.headers.get("supasecret") !== Deno.env.get("FUNCTION_SECRET")
    ) {
      bot.api.sendMessage(channel_id, "❌ No supasecret.");
      return new Response("not allowed", { status: 405 });
    }

    let url = new URL(req.url);

    console.log(url);

    const message = decodeURIComponent(url.searchParams.get("message") || "");

    bot.api.sendMessage(channel_id, message);

    return new Response("done", { status: 200 });
  } catch (err) {
    console.error(err);
    bot.api.sendMessage(
      channel_id,
      "❌ Error request on Telegram bot: probably body."
    );
    return new Response("error", { status: 400 });
  }
});
