import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:language?",
            component: () => import("../views/Home.vue"),
            props: true
        }
    ]
});

export default router;
