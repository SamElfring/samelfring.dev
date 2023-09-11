<template>
    <ol class="lg:hidden relative border-l border-slate-400">
        <li v-for="item in items" :key="item.title" class="mb-4 ml-4">
            <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"
            ></div>
            <time class="mb-1 text-sm leading-none text-slate-400">{{
                item.time
            }}</time>
            <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
            <p class="mb-4 text-base text-slate-400">{{ item.text }}</p>
        </li>
    </ol>

    <ol class="hidden lg:flex items-start">
        <li v-for="item in items" :key="item.title" class="relative max-w-sm">
            <div class="flex items-center">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full border border-white"
                ></div>
                <div class="flex w-full bg-slate-400 h-0.5"></div>
            </div>
            <div class="mt-3 pr-4">
                <h3 class="text-lg font-semibold text-white">
                    {{ item.title }}
                </h3>
                <time
                    class="block mb-2 text-sm font-normal leading-none text-gray-400"
                    >{{ item.time }}</time
                >
                <p class="text-base font-normal text-gray-500">
                    {{ item.text }}
                </p>
            </div>
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
