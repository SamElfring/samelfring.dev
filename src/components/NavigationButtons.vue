<template>
    <section class="grid grid-cols-2 gap-4 md:hidden">
        <div
            v-for="item in navItems"
            :key="item[0]"
            class="flex justify-center items-center border-2 border-slate-700 rounded-lg hover:border-blue-700 bg-gradient-to-r from-slate-900 to-slate-800"
        >
            <a
                :href="item[0]"
                class="font-semibold w-full text-center py-2"
                :aria-label="item[2]"
            >
                {{ $t(item[1]) }}
            </a>
        </div>
    </section>
</template>

<script setup>
const navItems = [
    ["#about-me", "main.aboutMe", "Navigate to about me section"],
    ["#study", "main.studies", "Navigate to studies section"],
    ["#experiences", "main.experiences", "Navigate to experiences section"],
    ["#projects", "main.projects", "Navigate to projects section"]
];
</script>
