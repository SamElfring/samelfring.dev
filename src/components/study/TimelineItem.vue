<template>
    <li class="mb-4 ml-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"
        ></div>
        <time class="mb-1 text-sm leading-none text-slate-400">{{ time }}</time>
        <h3 class="text-lg font-semibold text-white">{{ title }}</h3>
        <p class="mb-4 text-base text-slate-400">{{ text }}</p>
    </li>
</template>

<script setup>
defineProps({
    time: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});
</script>
