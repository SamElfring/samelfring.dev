<template>
    <section
        id="projects"
        ref="projects"
    >
        <h2 class="section-title">{{ $t("main.projects") }}</h2>

        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <div
                v-for="item in projectItems"
                :key="item.title"
                class="bg-slate-900 border border-slate-600 flex flex-col hover:scale-[1.01] transition-transform"
            >
                <div
                    class="bg-center bg-contain bg-no-repeat h-56 p-2 relative flex items-end"
                    :style="{ backgroundImage: `url('${item.img}')` }"
                >
                    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>

                    <div class="z-10 p-2 flex justify-between items-center w-full">
                        <p class="font-bold text-lg">{{ $t(item.title) }}</p>

                        <a
                            v-for="url in item.urls"
                            :key="url[1]"
                            :href="url[1]"
                            target="_blank"
                            class="flex gap-2"
                            :aria-label="url[2]"
                        >
                            <font-awesome-icon
                                :icon="url[0]"
                                class="text-2xl rounded-full"
                            ></font-awesome-icon>
                        </a>
                    </div>
                </div>

                <div class="flex-1 p-2 bg-slate-800">
                    <p class="text-slate-300">{{ $t(item.description) }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useIntersectionAnimation } from "@/composables/useIntersectionAnimation.js";

const projects = ref(null);

onMounted(() => {
    if ("IntersectionObserver" in window) {
        projects.value.style.opacity = 0;

        const animationOffset = projects.value.offsetWidth;

        useIntersectionAnimation(projects.value, {
            translateY: [animationOffset, 0],
            opacity: 1,
            duration: 1000,
            easing: "easeOutQuad"
        }).start();
    }
});

const projectItems = [
    {
        title: "projects.workoutTracker.title",
        img: "img/projects/workouttracker.webp",
        description: "projects.workoutTracker.text",
        urls: [["fa-up-right-from-square", "https://gym.samelfring.dev", "Navigate to the Workout Tracker website"]]
    },
    {
        title: "projects.synologyPhotosReminder.title",
        img: "img/projects/synologyapp.webp",
        description: "projects.synologyPhotosReminder.text",
        urls: [
            [
                "fa-brands fa-github",
                "https://github.com/SamElfring/SynologyPhotosReminder",
                "Navigate to SynologyPhotosReminder GitHub page"
            ]
        ]
    },
    {
        title: "projects.rentACar.title",
        img: "img/projects/rentacar.webp",
        description: "projects.rentACar.text",
        urls: [["fa-brands fa-github", "https://github.com/SamElfring/RentACar", "Navigate to RentACar GitHub page"]]
    },
    {
        title: "projects.calc4You.title",
        img: "img/projects/calc4you.webp",
        description: "projects.calc4You.text",
        urls: [
            [
                "fa-brands fa-github",
                "https://github.com/LucasHuls/Calc4You-Project-Groep-5",
                "Navigate to Calc4You GitHub page"
            ]
        ]
    },
    {
        title: "projects.gameFinder.title",
        img: "img/projects/gamefinder.webp",
        description: "projects.gameFinder.text",
        urls: [
            [
                "fa-brands fa-github",
                "https://github.com/SamElfring/Stage-Opdracht-GameFinder",
                "Navigate to GameFinder GitHub page"
            ]
        ]
    }
];
</script>
