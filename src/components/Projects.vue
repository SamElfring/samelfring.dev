<template>
    <div id="projects">
        <div class="section-title">Projecten</div>

        <div class="grid grid-cols-1">
            <div
                v-for="item in projectItems"
                :key="item.title"
                class="border border-slate-600"
            >
                <div
                    class="bg-center bg-cover h-60 p-2 relative flex items-end"
                    :style="{ backgroundImage: `url('${item.img}')` }"
                >
                    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b    from-transparent to-black"></div>

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

                <div class="p-2 bg-slate-800">
                    <p class="text-slate-300">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const projectItems = [
    {
        title: "Synology Photo App",
        img: "img/projects/synologyapp.png",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente aut, \
                        illo consequuntur molestiae, pariatur optio hic placeat quas perferendis \
                        labore eum mollitia laborum assumenda necessitatibus ab possimus et distinctio eos?",
        urls: [
            ["fa-brands fa-github", "#"]
        ]
    }
];
</script>
