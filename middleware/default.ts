export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = useSupabaseUser();
  console.log(user.value);
});
