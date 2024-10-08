// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@hypernym/nuxt-anime"],
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
    },
    app: {
        head: {
            title: "Sam Elfring - Software Developer",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "I am Sam, a 20-year-old Software Developer with a passion for creating digital solutions. I study at Saxion in the Software Development program."
                }
            ],
            script: [
                { src: "https://www.googletagmanager.com/gtag/js?id=G-D32TP1BEDD", async: true },
                { src: "js/analytics.js" }
            ]
        }
    },
    compatibilityDate: "2024-09-24"
});
