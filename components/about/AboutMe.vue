<template>
    <section id="about-me">
        <h2 class="section-title">{{ $t("main.aboutMe") }}</h2>

        <div class="grid grid-cols-1 mt-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AboutMeBlock
                icon="fa-code"
                title="aboutMe.blocks.softwareDevelopment.title"
                text="aboutMe.blocks.softwareDevelopment.text"
            />
            <AboutMeBlock
                icon="fa-dumbbell"
                title="aboutMe.blocks.fitness.title"
                text="aboutMe.blocks.fitness.text"
            />
            <AboutMeBlock
                icon="fa-dog"
                title="aboutMe.blocks.animals.title"
                text="aboutMe.blocks.animals.text"
            />
        </div>
    </section>
</template>
