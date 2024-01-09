import { createRouter, createWebHistory } from 'vue-router';
import Intro from '@/scene/Intro.vue';
import Office from '@/scene/Office.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'root',
            path: '/',
            redirect: (to) => {
                return {
                    path: '/intro'
                };
            }
        },
        {
            path: '/intro',
            name: 'intro',
            component: Intro
        },
        {
            path: '/office',
            name: 'office',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Office
        }
    ]
});

export default router;
