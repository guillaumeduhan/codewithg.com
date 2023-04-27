import { storeToRefs } from "pinia";
import { useOrders } from "../stores/orders";

export function useStore() {
  const ordersStore = useOrders();

  const { setOrders } = ordersStore;
  const { getOrders } = storeToRefs(ordersStore);

  return { getOrders, setOrders };
}
