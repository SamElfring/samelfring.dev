<template>
    <section class="md:flex md:items-center md:justify-center md:gap-20 md:h-screen">
        <img
            src="/img/sam.png"
            alt="Person"
            class="aspect-square object-cover rounded-full border-8 border-slate-500 w-1/2 mx-auto md:mx-0 md:w-80"
        />

        <div class="mt-4 md:max-w-xl md:m-0">
            <p class="text-sm md:text-lg text-slate-500 font-thin">Software Developer</p>
            <h1 class="text-3xl md:text-6xl font-bold">Sam Elfring</h1>
            <p class="text-slate-400 mt-2 md:text-xl">
                {{ $t("hero.description") }}
            </p>

            <div class="mt-4 text-slate-300">
                <a
                    href="/files/cv_Sam_Elfring.pdf"
                    download
                    class="mr-4 border-blue-500 border px-4 py-2 rounded-full shadow-2xl hover:bg-blue-500 hover:text-white hover:animate-pulse"
                >
                    Download CV
                </a>
            </div>
        </div>
    </section>
</template>
