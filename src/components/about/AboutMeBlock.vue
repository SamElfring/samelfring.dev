<template>
    <div class="flex gap-6">
        <font-awesome-icon :icon="icon" class="text-4xl text-blue-500 w-10" />

        <div>
            <h3 class="text-xl font-semibold">{{ title }}</h3>

            <p class="text-slate-400">{{ text }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    icon: {
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
