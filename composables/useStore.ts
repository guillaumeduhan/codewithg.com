import { storeToRefs } from "pinia";
import { useOrders } from "../stores/orders";

export function useStore() {
  const ordersStore = useOrders();

  const { setOrders } = ordersStore;
  const { getOrders, getOrdersCourses } = storeToRefs(ordersStore);

  return {
    getOrders,
    getOrdersCourses,
    setOrders,
  };
}
