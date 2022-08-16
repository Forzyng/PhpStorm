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
        path: '/login',
        name: 'Login',
        component: () => import('../pages/LogAndRegPage')
    },
    {
        path: '/redact-profile',
        name: 'RedactProfile',
        component: () => import('../pages/RedactProfile')
    },
    //User-Redact-Profile
    {
        path: '/posts',
        name: 'Posts',
        component: () => import('../pages/PostsPage')
    },
    {
        path: '/users/:login',
        name: 'User',
        component: () => import('../pages/OneUserPage')
    },
    {
        path: '/posts/:slug',
        name: 'Post',
        component: () => import('../pages/SinglePostPage')
    },
    {
        path: '/post/redact/:slug',
        name: 'RedactPost',
        component: () => import('../pages/RedactPostPage')
    },
    {
        path: '/create-post',
        name: 'CreatePost',
        component: () => import('../pages/CreatePostPage')
    },
    {
        path: '/agents',
        name: 'Agents',
        component: () => import('../pages/AgentsPage')
    },
    {
        path: '/my-profile',
        name: 'MyProfile',
        component: () => import('../pages/MyProfilePage')
    },
    {
        path: '/email/verify/:user_id/:hash',
        name: 'emailVerify',
        component: () => import('../pages/EmailVerifyPage')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error404',
        component: () => import('../pages/PageError404')
    },
]

const index = createRouter({
    history: createWebHistory(),
    routes,
})

export default index
