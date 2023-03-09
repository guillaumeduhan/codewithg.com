import { useOrdersStore } from "../stores/orders";
import { storeToRefs } from "pinia";

export const useStore = () => {
  const ordersStore = useOrdersStore();
  const { getOrders } = storeToRefs(ordersStore);

  return {
    getOrders,
  };
};
