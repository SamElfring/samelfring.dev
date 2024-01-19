<template>
    <section id="study">
        <h2 class="section-title">Opleidingen</h2>

        <Timeline :items="timeLineItems" />
    </section>
</template>

<script setup>
import Timeline from "./helpers/Timeline.vue";

const timeLineItems = [
    {
        time: "2023 - nu",
        title: "studies.saxion.title",
        text: "studies.saxion.text"
    },
    {
        time: "2019 - 2022",
        title: "studies.roc.title",
        text: "studies.roc.text"
    }
];
</script>
