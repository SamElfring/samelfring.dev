<template>
    <nav
        class="md:fixed w-full p-4 flex justify-between items-center z-[999] transition-all duration-500"
        ref="header"
    >
        <div class="flex items-center">
            <div class="bg-blue-600 px-3 py-1 mr-2 rounded-full font-black text-lg">S</div>
            <h2 class="text-lg font-bold">Sam Elfring</h2>
        </div>

        <div class="flex items-center gap-4">
            <select
                name="language"
                class="rounded p-2 bg-slate-700 border-slate-600 placeholder-slate-400 text-white focus:ring-blue-500 focus:border-blue-500"
                @change="$i18n.locale = $event.target.value"
            >
                <option value="nl" :selected="$i18n.locale == 'nl'">Nederlands</option>
                <option value="en" :selected="$i18n.locale == 'en'">English</option>
                <option value="de" :selected="$i18n.locale == 'de'">Deutsch</option>
            </select>

            <ul class="hidden md:flex gap-4">
                <li v-for="link in navLinks">
                    <a
                        :href="link.link"
                        class="text-slate-400 hover:underline hover:text-white"
                    >
                        {{ $t(link.name) }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const navLinks = [
    { name: "main.aboutMe", link: "#about-me" },
    { name: "main.experiences", link: "#experiences" },
    { name: "main.studies", link: "#study" },
    { name: "main.projects", link: "#projects" },
    { name: "main.skills", link: "#skills" }
];

const header = ref(null);

onMounted(() => {
    window.addEventListener("scroll", () => {
        if (window.innerWidth > 768 /* Medium screen breakpoint */) {
            const headerClasses = ["bg-slate-800", "py-2"];

            if (header.value?.classList) {
                if (window.scrollY > 0) header.value.classList.add(...headerClasses);
                else header.value.classList.remove(...headerClasses);
            }
        }
    });
});
</script>
