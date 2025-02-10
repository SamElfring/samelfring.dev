<template>
    <div
        @click="emit('close')"
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
        <div
            @click.stop
            class="bg-slate-900 rounded-lg max-w-3xl w-full border border-slate-600 overflow-hidden"
        >
            <div
                class="bg-center bg-cover bg-no-repeat h-96 p-2 relative flex items-end border-b border-slate-600"
                :style="{ backgroundImage: `url('${props.project.img}')` }"
            >
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>

                <div class="z-10 p-2 flex justify-between items-center w-full">
                    <p class="font-bold text-lg">{{ $t(props.project.title) }}</p>

                    <a
                        v-for="url in props.project.urls"
                        :key="url[1]"
                        :href="url[1]"
                        target="_blank"
                        class="flex gap-2"
                        :aria-label="url[2]"
                    >
                        <font-awesome-icon
                            :icon="url[0]"
                            class="text-2xl rounded-full"
                        ></font-awesome-icon>
                    </a>
                </div>
            </div>

            <div class="flex-1 p-2 bg-slate-800">
                <p class="text-slate-300">{{ $t(props.project.description) }}</p>
            </div>
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
