<template>
    <div class="p-4 bg-slate-800 border-t-2 border-t-slate-700 text-center">
        <div class="flex justify-center gap-4">
            <a
                v-for="link in footerLinks"
                :href="link.link"
                target="_blank"
                :aria-label="link.label"
            >
                <font-awesome-icon
                    :icon="link.icon"
                    class="text-xl"
                ></font-awesome-icon>
            </a>
        </div>

        <p class="mt-2 text-slate-300">&copy; {{ new Date().getFullYear() }} - Sam Elfring</p>
    </div>
</template>

<script setup>
const footerLinks = [
    {
        icon: "fa-brands fa-facebook",
        link: "https://www.facebook.com/sam.elfring.3/",
        label: "Navigate to Facebook page"
    },
    {
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/sam_elfring/",
        label: "Navigate to Instagram page"
    },
    {
        icon: "fa-brands fa-linkedin",
        link: "https://www.linkedin.com/in/sam-elfring-061822194/",
        label: "Navigate to LinkedIn page"
    }
];
</script>
