export default defineNuxtRouteMiddleware(async (to, _from) => {
  const supabase = useSupabaseAuthClient();
  const user = ref<any>(null);
  const response = await supabase.auth.getUser();
  if (response) {
    const { data } = response;
    user.value = data.user;
  }
  if (!user.value) {
    navigateTo("/login");
  }
});
