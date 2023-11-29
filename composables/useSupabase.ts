export const useSupabase = () => {
  const supabase = useSupabaseAuthClient();
  const client = useSupabaseClient();
  
  const { setOrders, setUser } = useStore();

  const getCurrentUser = async () => {
    const {data}: any = await supabase.auth.getUser();
    if (data) setUser(data.user)
  }

  const fetchOrders = async () => {
    const response = await supabase.auth.getUser();
    if (response) {
      const { data } = response;
      user.value = data.user;
    }
    if (!user.value) return;
    try {
      const { data } = await client
        .from("orders")
        .select(
          `*,
          courses (
            *
          )`
        )
        .eq("email", user.value.email);

      if (data) {
        setOrders(data);
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    supabase,
    getCurrentUser,
    fetchOrders,
  };
};
