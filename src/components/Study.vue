<template>
    <div id="study">
        <p class="section-title">Opleidingen</p>

        <Timeline :items="timeLineItems" />
    </div>
</template>

<script setup>
import Timeline from "./helpers/Timeline.vue";

const timeLineItems = [
    {
        time: "2023 - nu",
        title: "Saxion University of Applied Sciences",
        text: "Op dit moment volg ik de opleiding Software Development aan het Saxion in Enschede."
    },
    {
        time: "2019 - 2022",
        title: "ROC van Twente",
        text: "Op het ROC volgde ik 4 jaar lang de opleiding Applicatie & Media ontwikkelaar en ben hier met een diploma voor geslaagd."
    }
];
</script>
