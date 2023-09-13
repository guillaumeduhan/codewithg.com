import { storeToRefs } from "pinia";
import { useLangs } from "../stores/lang";
import { useOrders } from "../stores/orders";

export function useStore() {
  const ordersStore = useOrders();
  const langStore = useLangs();

  const { setOrders } = ordersStore;
  const { getOrders, getOrdersCourses } = storeToRefs(ordersStore);
  const { translate, setLocale } = langStore;
  const { getLocale } = storeToRefs(langStore);

  return {
    getOrders,
    getOrdersCourses,
    getLocale,
    setOrders,
    setLocale,
    translate,
  };
}
