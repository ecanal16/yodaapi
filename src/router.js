import {createRouter, createWebHistory} from "vue-router";

import Index from "./pages/index.vue";
import Second from "./pages/second.vue";
import Third from "./pages/third.vue";
import Fourth from "./pages/fourth.vue";
import Fifth from "./pages/fifth.vue";
import NotFound from "./pages/404.vue";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/second",
        name: "Second",
        component: Second,
    },
    {
        path: "/third",
        name: "Third",
        component: Third,
    },
    {
        path: "/fourth",
        name: "Fourth",
        component: Fourth,
    },
    {
        path: "/fifth",
        name: "Fifth",
        component: Fifth,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;