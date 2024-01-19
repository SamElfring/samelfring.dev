// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    css: ["./assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
    i18n: {
        vueI18n: "./i18n.config.ts"
    },
    build: {
        transpile: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/vue-fontawesome"
        ]
    }
});
