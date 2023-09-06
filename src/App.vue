<template>
    <div class="p-4">
        <Header />
    
        <Hero class="mt-4" />
    
        <AboutMe class="mt-8" />
    </div>

    <Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import AboutMe from './components/about/AboutMe.vue';
import Footer from './components/Footer.vue';
</script>
