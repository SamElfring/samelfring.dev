<template>
    <section id="experiences">
        <h2 class="section-title">{{ $t("main.experiences") }}</h2>

        <HelpersTimeline :items="timeLineItems" />
    </section>
</template>

<script setup>
const timeLineItems = [
    {
        time: "2022 - nu",
        title: "experiences.campingcare.title",
        text: "experiences.campingcare.text"
    },
    {
        time: "2020",
        title: "experiences.cube.title",
        text: "experiences.cube.text"
    },
    {
        time: "2018",
        title: "experiences.telecats-conceptlisous.title",
        text: "experiences.telecats-conceptlisous.text"
    }
];
</script>
