<template>
    <div id="about-me">
        <p class="w-max font-bold border-b-2 border-slate-500">Over mij</p>

        <div class="grid grid-cols-1 mt-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AboutMeBlock
                icon="fa-code"
                title="Software Development"
                text="
                    Mijn dagen worden gevuld met het schrijven van code en het ontwikkelen van innovatieve digitale oplossingen.
                    Tijdens mijn werk en opleiding werk ik aan boeiende projecten in de wereld van softwareontwikkeling.
                "
            />
            <AboutMeBlock
                icon="fa-dumbbell"
                title="Fitness"
                text="
                    Buiten mijn programmeerwerk vind je me vaak in de sportschool, waar ik werk aan mijn kracht en conditie.
                    Verder sta ik ook vaak op het voetbal veld waar ik speel in een vriendenteam als laatste man.
                "
            />
            <AboutMeBlock
                icon="fa-dog"
                title="Dieren"
                text="Zelf ben ik een groot dierenfan. Ik heb mijn hele leven samen met dieren geleefd en op dit moment hebben wij 3 honden in huis."
            />
        </div>
    </div>
</template>

<script setup>
import AboutMeBlock from "./AboutMeBlock.vue";
</script>
