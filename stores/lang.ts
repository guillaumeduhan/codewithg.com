import { defineStore } from "pinia";
import en from "./lang/en.json";
import fr from "./lang/fr.json";

export const useLangs = defineStore("langs", () => {
  let locale = ref("en");

  const getLocale = computed(() => locale.value);

  const getLangs: any = computed(() => {
    if (locale.value === "fr") return fr;
    if (locale.value === "en") return en;
  });

  const setLocale = (l: string) => {
    locale.value = l.toLowerCase();
  };

  const translate = (path: string, subpath: string): any => {
    if (!path) return null;
    if (!getLangs) return null;
    return subpath ? getLangs.value[path][subpath] : getLangs.value[path] || "";
  };

  return { locale, getLocale, getLangs, setLocale, translate };
});
