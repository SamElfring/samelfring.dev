<template>
    <section class="md:flex md:items-center md:justify-center md:gap-20 md:h-screen">
        <img
            src="/img/sam.webp"
            alt="Person"
            class="aspect-square object-cover rounded-full border-8 border-slate-500 w-1/2 mx-auto md:mx-0 md:w-80"
            ref="heroImg"
        />

        <div class="mt-4 md:max-w-xl md:m-0">
            <p class="text-sm md:text-lg text-slate-400 font-thin">Software Developer</p>
            <h1 class="text-3xl md:text-6xl font-bold">Sam Elfring</h1>
            <h2 class="text-slate-400 mt-2 md:text-xl">
                {{ $t("hero.description") }}
            </h2>

            <div class="mt-4 text-slate-300 flex items-center">
                <div class="flex bg-slate-800 rounded-lg overflow-hidden">
                    <a
                        v-for="link in socialMediaLinks"
                        :href="link.url"
                        :aria-label="link.label"
                        target="_blank"
                        class="p-2 px-4 hover:bg-slate-500"
                    >
                        <font-awesome-icon
                            :icon="link.icon"
                            class="text-lg"
                        ></font-awesome-icon>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const socialMediaLinks = [
    {
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/sam.elfring.3/",
        label: "Navigate to Facebook page"
    },
    {
        icon: "fa-brands fa-instagram",
        url: "https://www.instagram.com/sam_elfring/",
        label: "Navigate to Instagram page"
    },
    {
        icon: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/sam-elfring-061822194/",
        label: "Navigate to LinkedIn page"
    }
];

const heroImg = ref(null);
</script>
