<template>
    <nav
        class="md:fixed w-full p-4 flex justify-between items-center z-[999] transition-all duration-500"
        ref="header"
    >
        <div class="flex items-center">
            <div class="bg-blue-600 px-3 py-1 mr-2 rounded-full font-black text-lg">S</div>
            <h2 class="text-lg font-bold">Sam Elfring</h2>
        </div>

        <ul class="hidden md:flex gap-4">
            <li v-for="link in navLinks">
                <a
                    :href="link.link"
                    class="text-slate-400 hover:underline hover:text-white"
                >
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const navLinks = [
    { name: "Over mij", link: "#about-me" },
    { name: "Ervaringen", link: "#experiences" },
    { name: "Opleidingen", link: "#study" },
    { name: "Projecten", link: "#projects" },
    { name: "Vaardigheden", link: "#skills" },
    { name: "Contact", link: "#contact" }
];

const header = ref(null);

onMounted(() => {
    window.addEventListener("scroll", () => {

        if (window.innerWidth > 768 /* Medium screen breakpoint */) {
            const headerClasses = ["bg-slate-800", "py-2"];
    
            if (window.scrollY > 0) header.value.classList.add(...headerClasses);
            else header.value.classList.remove(...headerClasses);
        }
    });
});
</script>
