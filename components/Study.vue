<template>
    <section
        id="study"
        ref="study"
    >
        <h2 class="section-title">{{ $t("main.studies") }}</h2>

        <HelpersTimeline :items="timeLineItems" />
    </section>
</template>

<script setup>
import { useIntersectionAnimation } from "@/composables/useIntersectionAnimation";

const study = ref(null);

onMounted(() => {
    if ("IntersectionObserver" in window) {
        study.value.style.opacity = 0;

        const animationOffset = study.value.offsetWidth;

        useIntersectionAnimation(study.value, {
            translateX: [animationOffset, 0],
            opacity: 1,
            duration: 1000,
            easing: "easeOutQuad"
        }).start();

        study.value.style.transform = `translateX(${animationOffset}px)`;
    }
});

const timeLineItems = [
    {
        time: "2023 - nu",
        title: "studies.saxion.title",
        text: "studies.saxion.text"
    },
    {
        time: "2019 - 2022",
        title: "studies.roc.title",
        text: "studies.roc.text"
    }
];
</script>
