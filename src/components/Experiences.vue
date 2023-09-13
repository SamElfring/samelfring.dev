<template>
    <div>
        <p class="w-max font-bold border-b-2 border-slate-400 mb-4">
            Ervaringen
        </p>

        <Timeline :items="timeLineItems" />
    </div>
</template>

<script setup>
import Timeline from "./helpers/Timeline.vue";

const timeLineItems = [
    {
        time: "2022 - nu",
        title: "Software Developer bij Camping Care",
        text: "Ik werk nu bij Camping.care in Denekamp waar ik samen \
                met een klein team werk aan een PMS voor campings \
                dat wordt gebruikt over heel Europa."
    },
    {
        time: "2020",
        title: "Stage bij Cube B.V.",
        text: "Meegedraaid in het team en gewerkt aan verschillende \
                projecten waaronder het ontwikkelen van een website \
                waarmee heel eenvoudig Cookie meldingen worden \
                gegenereerd."
    },
    {
        time: "2018",
        title: "Meeloopdagen bij Telecats B.V. en Conceptlisious",
        text: "Tijdens deze meeloopdagen heb ik meerdere SCRUM sessies \
                bijgewoond en ben ik bezig geweest met het testen van \
                virtual reality spellen."
    }
];
</script>
