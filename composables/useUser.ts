import { useUserStore } from "./../stores/user";
import { storeToRefs } from "pinia";

export const useUser = () => {
  const userStore = useUserStore();
  const { setUser } = userStore;
  const { getUser, isOnline } = storeToRefs(userStore);

  return {
    getUser,
    isOnline,
    setUser,
  };
};
