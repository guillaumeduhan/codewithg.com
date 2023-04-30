export default defineNuxtRouteMiddleware(async (to, _from) => {
  const supabase = useSupabaseAuthClient();
  const user = ref<any>(null);
  const response = await supabase.auth.getUser();
  if (response) {
    const { data } = response;
    return (user.value = data.user);
  } else {
    console.log("no user logged");
    return navigateTo("/login");
  }
});
