import { defineStore } from "pinia";
// import localCourses from "../static/courses.json";

export const useOrders = defineStore("orders", () => {
  let orders = ref([]);

  const getOrders = computed(() => orders.value);

  const getOrdersCourses = computed(() => {
    return getOrders.value.map(({ id, courses, ...rest }: any) => {
      // const localCourse = localCourses.find((x) => x.slug === courses.slug);
      // return {
      //   order_id: id,
      //   vimeo_url: courses.vimeo_url,
      //   tally_url: courses.tally_url,
      //   ...rest,
      //   ...localCourse,
      // };
    });
  });

  function setOrders(_orders: any) {
    orders.value = _orders;
  }

  return { getOrders, setOrders, getOrdersCourses };
});
