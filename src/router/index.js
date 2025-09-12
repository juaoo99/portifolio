import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory('/portifolio/'),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (sessionStorage.redirect) {
        const redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        next(redirect.replace(location.origin, ''));
    } else {
        next();
    }
});

export default router;
