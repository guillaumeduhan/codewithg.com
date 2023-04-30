export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = useSupabaseUser();
});
