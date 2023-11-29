import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  let user: any = ref(undefined);

  const getUser = computed(() => user.value);

  function setUser(_user: any) {
    user.value = _user;
  }

  return { getUser, setUser };
});
