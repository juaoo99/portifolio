import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory('/portifolio/'),
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('@/views/pages/Landing.vue')
        }
    ]
});

export default router;
