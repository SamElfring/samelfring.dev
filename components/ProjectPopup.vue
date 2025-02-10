<template>
    <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div class="bg-slate-900 p-4 rounded-lg max-w-3xl w-full">
            <button
                @click="emit('close')"
                class=""
            >
                X
            </button>

            <h2 class="text-2xl font-bold mb-4">{{ $t(project.title) }}</h2>

            <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
                <img
                    :src="props.project.img"
                    class="w-full h-auto"
                />
            </div>

            <p class="mt-4">{{ $t(project.description) }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    project: Object
});

const emit = defineEmits(["close"]);
</script>
