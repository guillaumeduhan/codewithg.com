import { defineStore } from "pinia";

export const useOrders = defineStore("orders", () => {
  let orders = ref([]);

  const getOrders = computed(() => orders.value);

  function setOrders(_orders: any) {
    orders.value = _orders;
  }

  return { getOrders, setOrders };
});
