<template>
    <div class="flex gap-6">
        <font-awesome-icon
            :icon="icon"
            class="text-4xl text-blue-500 w-10"
        />

        <div>
            <h3 class="text-xl font-semibold">{{ $t(title) }}</h3>

            <h4 class="text-slate-400">{{ $t(text) }}</h4>
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
