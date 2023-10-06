<template>
    <section class="grid grid-cols-2 gap-4 sm:hidden">
        <div
            v-for="item in navItems"
            :key="item[0]"
            class="flex justify-center items-center border-2 border-slate-700 rounded-lg hover:border-blue-700 bg-gradient-to-r from-slate-900 to-slate-800"
        >
            <a
                :href="item[0]"
                class="font-semibold w-full text-center py-2"
            >
                {{ item[1] }}
            </a>
        </div>
    </section>
</template>

<script setup>
const navItems = [
    ["#about-me", "Over mij"],
    ["#study", "Opleidingen"],
    ["#experiences", "Ervaringen"],
    ["#projects", "Projecten"]
];
</script>
