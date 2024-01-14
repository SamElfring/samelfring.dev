<template>
    <Header />

    <div class="p-4">
        <Hero class="mt-8" />

        <NavigationButtons class="mt-8" />

        <AboutMe class="mt-8" />

        <div class="mt-8 block lg:flex lg:gap-16">
            <Experiences class="flex-1" />

            <Study class="flex-1" />
        </div>

        <Projects class="mt-8" />

        <Skills class="mt-8" />
    </div>

    <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import NavigationButtons from "../components/NavigationButtons.vue";
import AboutMe from "../components/about/AboutMe.vue";
import Study from "../components/Study.vue";
import Experiences from "../components/Experiences.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Footer from "../components/Footer.vue";

import { useI18n } from "vue-i18n";

const props = defineProps({
    language: {
        type: String,
        default: "nl"
    }
});

const i18n = useI18n();
i18n.locale.value = props.language;
</script>
