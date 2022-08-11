import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/PageHome')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/PageAbout')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error404',
        component: () => import('../pages/PageError404')
    }
]

const index = createRouter({
    history: createWebHistory(),
    routes,
})

export default index
