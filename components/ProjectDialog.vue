<template>
    <Teleport to="body">
        <Transition name="dialog">
            <div
                v-if="project"
                class="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
                <div
                    class="absolute inset-0 bg-black/70"
                    @click="$emit('close')"
                ></div>

                <div
                    class="relative z-10 bg-slate-900 border border-slate-600 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                >
                    <button
                        class="absolute top-3 right-3 z-20 text-white bg-slate-800 hover:bg-slate-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                        @click="$emit('close')"
                        aria-label="Close dialog"
                    >
                        <font-awesome-icon icon="fa-xmark" />
                    </button>

                    <!-- Carousel -->
                    <div class="relative overflow-hidden h-64 bg-black select-none">
                        <div
                            class="flex transition-transform duration-300 ease-in-out h-full"
                            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
                        >
                            <img
                                v-for="(img, i) in project.images"
                                :key="i"
                                :src="img"
                                :alt="`${$t(project.title)} screenshot ${i + 1}`"
                                class="w-full h-full object-contain flex-shrink-0"
                            />
                        </div>

                        <template v-if="project.images.length > 1">
                            <button
                                class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                                @click="prev"
                                aria-label="Previous image"
                            >
                                <font-awesome-icon icon="fa-chevron-left" />
                            </button>
                            <button
                                class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                                @click="next"
                                aria-label="Next image"
                            >
                                <font-awesome-icon icon="fa-chevron-right" />
                            </button>

                            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                <button
                                    v-for="(_, i) in project.images"
                                    :key="i"
                                    :class="[
                                        'w-2 h-2 rounded-full transition-colors',
                                        i === currentIndex ? 'bg-white' : 'bg-white/40'
                                    ]"
                                    @click="currentIndex = i"
                                    :aria-label="`Go to image ${i + 1}`"
                                />
                            </div>
                        </template>
                    </div>

                    <!-- Content -->
                    <div class="p-6">
                        <div class="flex justify-between items-start gap-4 mb-4">
                            <h3 class="text-xl font-bold">{{ $t(project.title) }}</h3>
                            <div class="flex gap-3 shrink-0">
                                <a
                                    v-for="url in project.urls"
                                    :key="url[1]"
                                    :href="url[1]"
                                    target="_blank"
                                    :aria-label="url[2]"
                                    class="text-slate-300 hover:text-white transition-colors"
                                >
                                    <font-awesome-icon
                                        :icon="url[0]"
                                        class="text-xl"
                                    />
                                </a>
                            </div>
                        </div>
                        <p class="text-slate-300 leading-relaxed">{{ $t(project.detailedDescription) }}</p>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
const props = defineProps({
    project: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(["close"]);

const currentIndex = ref(0);

watch(
    () => props.project,
    () => {
        currentIndex.value = 0;
    }
);

function prev() {
    currentIndex.value = (currentIndex.value - 1 + props.project.images.length) % props.project.images.length;
}

function next() {
    currentIndex.value = (currentIndex.value + 1) % props.project.images.length;
}

onMounted(() => {
    window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
    window.removeEventListener("keydown", onKeydown);
});

function onKeydown(e) {
    if (!props.project) return;
    if (e.key === "Escape") emit("close");
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
}
</script>

<style scoped>
.dialog-enter-active,
.dialog-leave-active {
    transition: opacity 0.2s ease;
}

.dialog-enter-from,
.dialog-leave-to {
    opacity: 0;
}
</style>
