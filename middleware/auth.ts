export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = useSupabaseUser();
  if (!user.value) {
    console.log("no user logged");
    return navigateTo("/login");
  }
});
