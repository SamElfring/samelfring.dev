import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// i18n
import { createI18n } from "vue-i18n";

// Translations
import en from "./locales/en.json";
import nl from "./locales/nl.json";
import de from "./locales/de.json";

const i18n = createI18n({
    locale: "nl",
    fallbackLocale: "nl",
    messages: { en, nl, de },
    legacy: false
});

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

const app = createApp(App);

app.use(i18n);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
