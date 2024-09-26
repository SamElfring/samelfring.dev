<template>
    <section
        id="experiences"
        ref="experiences"
    >
        <h2 class="section-title">{{ $t("main.experiences") }}</h2>

        <HelpersTimeline :items="timeLineItems" />
    </section>
</template>

<script setup>
import { useIntersectionAnimation } from "@/composables/useIntersectionAnimation";

const experiences = ref(null);

onMounted(() => {
    if ("IntersectionObserver" in window) {
        experiences.value.style.opacity = 0;

        const animationOffset = -experiences.value.offsetWidth;

        useIntersectionAnimation(experiences.value, {
            translateX: [animationOffset, 0],
            opacity: 1,
            duration: 1000,
            easing: "easeOutQuad"
        }).start();

        experiences.value.style.transform = `translateX(${animationOffset}px)`;
    }
});

const timeLineItems = [
    {
        time: "2022 - nu",
        title: "experiences.campingcare.title",
        text: "experiences.campingcare.text"
    },
    {
        time: "2020",
        title: "experiences.cube.title",
        text: "experiences.cube.text"
    },
    {
        time: "2018",
        title: "experiences.telecats-conceptlisous.title",
        text: "experiences.telecats-conceptlisous.text"
    }
];
</script>
