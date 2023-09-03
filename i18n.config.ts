import en from "./lang/en.json";
import fr from "./lang/fr.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    en,
    fr,
  },
}));
