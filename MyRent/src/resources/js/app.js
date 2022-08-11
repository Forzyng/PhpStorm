import './bootstrap';

// Подключение Vie И его центрального компонента
import { createApp } from 'vue'
import Main from './components/Welcome'
import { useUserStore } from "./store/user";
const app = createApp(Main)

// Подключение хранилища
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

// Подключение системы коротких сообщений
import Toaster from '@meforma/vue-toaster'
app.use(Toaster)


// Подключение маршрутов
import router from "./router";


router.beforeEach((to, from, next) => {
    console.log('Before each')
    const logedStore = useUserStore()
    if (to.name === 'Login' && logedStore.user) next({ name: 'Home' })
    else if (to.name === 'redactprofile' && !logedStore.user) next({ name: 'Home' })
    else if (to.name === 'MyProfile' && !logedStore.user) next({ name: 'Home' })
    else next()
})


app.use(router)
// Внедрение Vue в страницу
app.mount('#app')
