import { defineStore } from "pinia";

interface User {
  name?: string;
  email?: string;
}

export const useUserStore = defineStore("user", () => {
  let user: User = reactive({});
  const getUser = computed(() => user);
  function setUser(_user: User) {
    user = _user;
  }

  return { getUser, setUser };
});
