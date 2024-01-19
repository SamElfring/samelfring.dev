// Translations
import en from "./locales/en.json";
import nl from "./locales/nl.json";
import de from "./locales/de.json";

export default defineI18nConfig(() => ({
    locale: "nl",
    fallbackLocale: "nl",
    messages: { en, nl, de },
    legacy: false
}));
