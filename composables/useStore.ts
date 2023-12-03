import { storeToRefs } from "pinia";
import { useOrders } from "~/stores/orders";
import { useUserStore } from "~/stores/user";

export function useStore() {
  const ordersStore = useOrders();
  const userStore = useUserStore();

  const { setOrders } = ordersStore;
  const { setUser } = userStore;
  const { getOrders, getOrdersCourses } = storeToRefs(ordersStore);
  const { getUser } = storeToRefs(userStore);

  return {
    getOrders,
    getOrdersCourses,
    setOrders,
    setUser,
    getUser
  };
}
