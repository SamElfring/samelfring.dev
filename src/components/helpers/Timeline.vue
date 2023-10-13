<template>
    <ol class="relative border-l border-slate-600">
        <li
            v-for="item in items"
            :key="item.title"
            class="mb-4 ml-4"
        >
            <div class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-blue-600"></div>
            <time class="mb-1 text-sm leading-none text-slate-400">
                {{ item.time }}
            </time>
            <h3 class="text-lg font-semibold text-white">{{ $t(item.title) }}</h3>
            <p class="mb-4 text-base text-slate-400">{{ $t(item.text) }}</p>
        </li>
    </ol>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        default: () => []
    }
});
</script>
