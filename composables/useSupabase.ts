export const useSupabase = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const { setOrders } = useStore();

  const fetchOrders = async () => {
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
        console.log(data);
        setOrders(data);
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    fetchOrders,
  };
};
