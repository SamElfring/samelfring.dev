<template>
    <section class="grid grid-cols-2 gap-4 md:hidden">
        <div
            v-for="item in navItems"
            class="flex justify-center items-center border-2 border-slate-700 rounded-lg hover:border-blue-700 bg-gradient-to-r from-slate-900 to-slate-800"
        >
            <a
                :href="item.link"
                class="font-semibold w-full text-center py-2"
                :aria-label="$t(item.text)"
            >
                {{ $t(item.text) }}
            </a>
        </div>
    </section>
</template>

<script setup>
const navItems = {
    aboutMe: {
        link: "#about-me",
        text: "main.aboutMe"
    },
    study: {
        link: "#study",
        text: "main.studies"
    },
    experiences: {
        link: "#experiences",
        text: "main.experiences"
    },
    projects: {
        link: "#projects",
        text: "main.projects"
    }
};
</script>
