<template>
    <section id="about-me">
        <h2 class="section-title">{{ $t("main.aboutMe") }}</h2>

        <div class="grid grid-cols-1 mt-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AboutMeBlock
                v-for="(block, index) in blocks"
                :key="index"
                :ref="(el) => (blockRefs[index] = el)"
                :icon="block.icon"
                :title="block.title"
                :text="block.text"
            />
        </div>
    </section>
</template>

<script setup>
import { useIntersectionAnimation } from "@/composables/useIntersectionAnimation";

const { $anime } = useNuxtApp();

const blockRefs = ref([]);

onMounted(() => {
    if ("IntersectionObserver" in window) {
        blockRefs.value.forEach((block) => {
            block.root.style.opacity = 0;
            block.root.style.transform = "translateY(500px)";
        });

        useIntersectionAnimation(
            blockRefs.value[0].root,
            {
                translateY: [500, 0],
                opacity: 1,
                easing: "easeOutQuad",
                delay: $anime.stagger(300)
            },
            { rootMargin: "0px 0px 400px 0px" },
            blockRefs.value.map((block) => block.root).slice(1)
        ).start();
    }
});

const blocks = [
    {
        icon: "fa-code",
        title: "aboutMe.blocks.softwareDevelopment.title",
        text: "aboutMe.blocks.softwareDevelopment.text"
    },
    {
        icon: "fa-dumbbell",
        title: "aboutMe.blocks.fitness.title",
        text: "aboutMe.blocks.fitness.text"
    },
    {
        icon: "fa-dog",
        title: "aboutMe.blocks.animals.title",
        text: "aboutMe.blocks.animals.text"
    }
];
</script>
