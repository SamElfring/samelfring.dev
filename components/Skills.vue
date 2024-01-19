<template>
    <section id="skills">
        <h2 class="section-title">{{ $t("main.skills") }}</h2>

        <div class="flex flex-wrap gap-3 lg:gap-4">
            <div
                v-for="skill in skills"
                class="p-2 rounded-md border-2 border-slate-400 flex flex-col justify-center items-center w-[6.5rem] hover:scale-[1.05] transition-transform"
            >
                <font-awesome-icon
                    v-if="skill.icon"
                    :icon="skill.icon"
                    class="text-6xl text-slate-200"
                ></font-awesome-icon>

                <img
                    v-else
                    :src="skill.img"
                    :alt="skill.name"
                    class="w-14 object-contain"
                />

                <p class="font-semibold text-slate-400 mt-2">{{ skill.name }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const skills = [
    { icon: "fa-brands fa-vuejs", name: "Vue.js" },
    { icon: "fa-brands fa-laravel", name: "Laravel" },
    { icon: "fa-brands fa-python", name: "Python" },
    { icon: "fa-brands fa-js", name: "JavaScript" },
    { img: "img/custom-icons/typescript.ico", name: "TypeScript" },
    { icon: "fa-brands fa-php", name: "PHP" },
    { icon: "fa-brands fa-html5", name: "HTML" },
    { icon: "fa-brands fa-css3-alt", name: "CSS" },
    { icon: "fa-brands fa-sass", name: "Sass" },
    { img: "img/custom-icons/tailwindcss.ico", name: "Tailwind" },
    { icon: "fa-brands fa-node", name: "Node.js" },
    { icon: "fa-brands fa-yarn", name: "Yarn" },
    { icon: "fa-brands fa-git-alt", name: "Git" },
    { icon: "fa-brands fa-java", name: "Java" },
    { icon: "fa-brands fa-windows", name: "Windows" },
    { icon: "fa-brands fa-linux", name: "Arch Linux" },
    { img: "img/custom-icons/csharp.ico", name: "C#" },
    { img: "img/custom-icons/nuxtjs.ico", name: "Nuxt.js" }
];
</script>
