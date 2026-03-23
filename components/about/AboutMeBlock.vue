<template>
    <div
        class="flex flex-col items-center text-center gap-4 bg-slate-800/60 rounded-2xl p-8"
        ref="root"
    >
        <font-awesome-icon
            :icon="icon"
            class="text-5xl text-blue-500"
        />

        <div>
            <h3 class="text-xl font-semibold mb-2">{{ $t(title) }}</h3>
            <p class="text-slate-400">{{ $t(text) }}</p>
        </div>
    </div>
</template>

<script setup>
const root = ref(null);

defineExpose({ root });

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
