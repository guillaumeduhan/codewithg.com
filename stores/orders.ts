import { defineStore } from "pinia";

export const useOrdersStore = defineStore("orders", () => {
  const orders = ref([]);

  const getOrders = computed(() => orders.value);

  return {
    getOrders,
  };
});
