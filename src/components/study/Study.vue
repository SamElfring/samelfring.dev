<template>
    <div>
        <p class="w-max font-bold border-b-2 border-slate-400 mb-4">
            Opleidingen
        </p>

        <ol class="relative border-l border-slate-400">
            <TimelineItem
                time="2023 - nu"
                title="Saxion University of Applied Sciences"
                text="Op dit moment volg ik de opleiding Software Development aan het Saxion in Enschede."
            />

            <TimelineItem
                time="2019 - 2022"
                title="ROC van Twente"
                text="Op het ROC volgde ik 4 jaar lang de opleiding Applicatie & Media ontwikkelaar en ben hier met een diploma voor geslaagd."
            />
        </ol>
    </div>
</template>

<script setup>
import TimelineItem from "./TimelineItem.vue";
</script>
