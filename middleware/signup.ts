// import jwt_decode from "jwt-decode";

export default defineNuxtRouteMiddleware(async (to, _from) => {
  //   // function to catch email from access_token then trigger edge function
  //   const route = useRoute();
  //   const full_path = route.fullPath;
  //   const queries: any = route.query;
  //   const config = useRuntimeConfig();
  //   // process env undefined here
  //   // problem later
  //   if (
  //     // full_path.includes("access_token") &&
  //     // full_path.includes("type=invite") &&
  //     // queries.access_token
  //     true
  //   ) {
  //     // 1. get token & decode
  //     // const decoded: any = jwt_decode(queries.access_token);
  //     // 2. complete msg with email
  //     // let email = decoded.email || "test";
  //     let email = "test";
  //     const message = `🏴‍☠️ Nouvelle inscription : ${email}`;
  //     // 3. send to telegram bot
  //     const client = useSupabaseAuthClient();
  //     const headers: any = {
  //       // Authorization: `Bearer ${config.public.SUPABASE_SERVICE_KEY}`,
  //       "Content-type": "application/json",
  //       supasecret: config.public.SUPABASE_SECRET,
  //     };
  //     await client.functions.invoke("telegram-bot", {
  //       headers,
  //       body: JSON.stringify({
  //         message,
  //       }),
  //     });
  //   }
});
