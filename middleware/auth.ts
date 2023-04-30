export default defineNuxtRouteMiddleware(async (to, _from) => {
  const supabase = useSupabaseAuthClient();
  const user = ref<any>(null);
  try {
    const response = await supabase.auth.getUser();
    if (response) {
      const { data } = response;
      user.value = data.user;
    } else {
      navigateTo("/login");
    }
  } catch (error) {
    console.error(error);
    navigateTo("/login");
  }
});
