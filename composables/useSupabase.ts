export const useSupabase = () => {
  const supabase = useSupabaseAuthClient();
  const client = useSupabaseClient();
  
  const { getUser, setOrders, setUser } = useStore();

  const getCurrentUser = async () => {
    const {data}: any = await supabase.auth.getUser();
    if (data) setUser(data.user)
  }

  const fetchOrders = async () => {
    const response = await supabase.auth.getUser();
    let user;
    if (response) {
      const { data } = response;
      user = data.user;
    }
    if (!user) return;
    try {
      const { data } = await client
        .from("orders")
        .select(
          `*,
          products (
            *
          ),
          courses (
            *
          )`
        )
        .eq("email", user.email);

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
