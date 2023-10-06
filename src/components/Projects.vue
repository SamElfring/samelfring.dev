<template>
    <section id="projects">
        <div class="section-title">Projecten</div>

        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <div
                v-for="item in projectItems"
                :key="item.title"
                class="border border-slate-600 flex flex-col hover:scale-[1.01] transition-transform"
            >
                <div
                    class="bg-center bg-contain bg-no-repeat h-56 p-2 relative flex items-end"
                    :style="{ backgroundImage: `url('${item.img}')` }"
                >
                    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>

                    <div class="z-10 p-2 flex justify-between items-center w-full">
                        <p class="font-bold text-lg">{{ item.title }}</p>

                        <a
                            v-for="url in item.urls"
                            :key="url[1]"
                            :href="url[1]"
                            target="_blank"
                            class="flex gap-2"
                        >
                            <font-awesome-icon
                                :icon="url[0]"
                                class="text-2xl rounded-full"
                            ></font-awesome-icon>
                        </a>
                    </div>
                </div>

                <div class="flex-1 p-2 bg-slate-800">
                    <p class="text-slate-300">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const projectItems = [
    {
        title: "Synology Photos Reminder",
        img: "img/projects/synologyapp.png",
        description:
            "Dit Node.js project zoekt naar foto's die zijn opgeslagen op een Synology NAS-server. \
            Het vindt foto's die op de huidige dag zijn gemaakt, maar een \
            willekeurig aantal jaren geleden, en stuurt ze vervolgens naar uw e-mail.",
        urls: [["fa-brands fa-github", "https://github.com/SamElfring/SynologyPhotosReminder"]]
    },
    {
        title: "RentACar (Oefen examen)",
        img: "img/projects/rentacar.png",
        description:
            "In dit proefexamen maken wij een auto verhuur website voor meneer Jansen. \
            Het bedrijf FastDevelopment maakt in opdracht software. \
            Het autoverhuurbedrijf Rent-a-Car, heeft gevraagd een nieuwe webapplicatie te bouwen.",
        urls: [["fa-brands fa-github", "https://github.com/SamElfring/RentACar"]]
    },
    {
        title: "Calc4You",
        img: "img/projects/calc4you.png",
        description:
            "Voor een school opdracht heb ik samen in een SCRUM team een \
            rekenmachine applicatie gemaakt in .NET Core. Deze applicatie gebruikt \
            ook leeftijdsverificatie voor het gebruik van de rekenmachine.",
        urls: [["fa-brands fa-github", "https://github.com/LucasHuls/Calc4You-Project-Groep-5"]]
    },
    {
        title: "GameFinder",
        img: "img/projects/gamefinder.png",
        description:
            "Tijdens mijn stage bij Cube B.V. heb ik (om het Vue.js framework te leren kennen) heb ik een opdracht gemaakt waarmee je via de IGDB api elk spel kan vinden met behulp van filters!",
        urls: [["fa-brands fa-github", "https://github.com/SamElfring/Stage-Opdracht-GameFinder"]]
    }
];
</script>
