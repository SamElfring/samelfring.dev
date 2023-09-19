<template>
    <div class="p-4">
        <Header />

        <Hero class="mt-4" />

        <NavigationButtons class="mt-8" />

        <AboutMe class="mt-8" />

        <div class="mt-8 block lg:flex lg:gap-16">
            <Experiences class="flex-1" />
            
            <Study class="flex-1" />
        </div>

        <Projects class="mt-4" />
    </div>

    <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import NavigationButtons from "./components/NavigationButtons.vue";
import AboutMe from "./components/about/AboutMe.vue";
import Study from "./components/Study.vue";
import Experiences from "./components/Experiences.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
* {
    scroll-behavior: smooth;
}
</style>
