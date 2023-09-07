<template>
    <div>
        <p class="w-max font-bold border-b-2 border-slate-500">What I Do</p>

        <div class="grid grid-cols-1 mt-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AboutMeBlock
                icon="fa-computer"
                title="Title"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam minima optio dolorum vitae repudiandae pariatur provident quis, eum cumque impedit?"
            />
            <AboutMeBlock
                icon="fa-cloud"
                title="Title"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam minima optio dolorum vitae repudiandae pariatur provident quis, eum cumque impedit?"
            />
            <AboutMeBlock
                icon="fa-hippo"
                title="Title"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam minima optio dolorum vitae repudiandae pariatur provident quis, eum cumque impedit?"
            />
        </div>
    </div>
</template>

<script setup>
import AboutMeBlock from "./AboutMeBlock.vue";
</script>
