import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import router from "../router";
import {api} from "./api";
import {useToastStore} from "./toast";

export const useUserStore = defineStore('user', {
    state: () => (
        {
            email_verified_at: '',
            description: '',
            name: '',
            user: JSON.parse(localStorage.getItem('user')) || null,
            users: [],
            total: 0, // общее количество загруженных постов
            per_page: 1, // количество постов на страницу
            page: 0, // текущая страница
            isCanMore: true,
            userLast: null,
            isLoaded: false
        }),
    getters: {
        loggedIn: (state) => state.id !== null,
    },
    actions: {
        updateUser (payload) {
            if(payload.description !== null)
            {
                this.description = payload.description
            }
            else {
                this.description = ''
            }


            this.name = payload.name
            const nuser = {
                id: payload.id,
                name: payload.name,
                email: payload.email,
                email_verified_at: payload.email_verified_at,
                created_at: payload.created_at,
                login: payload.login,
                description: payload.description
            }
            this.rememberUser(nuser)
        },
        rememberUser(user)
        {
            this.user = user
            console.log(user);
            localStorage.setItem('user', JSON.stringify(this.user))
        },
        forgetUser() {
            this.name = ''
            this.description = ''
            this.user = null
            localStorage.removeItem('user')
        },
        GoRedact()
        {
            router.push('/redact-profile')
        },


        getMoreUsers(){
            if (this.page * this.per_page > this.total) {
                this.isCanMore = false
                return
            }
            this.page++

            let url = '/users/?page=' + this.page + '&per_page=' + this.per_page
            console.log('get new users: ' + url)

            api.get(url)
                .then(res => {
                    this.total = res.total
                    console.log('getData: ')
                    console.log(res.data)
                    this.users = this.users.concat(res.data)
                })
        },

        getUserByLogin(login)
        {
            const toast = useToastStore()
            const data = new FormData()
            data.append('login', login);

            api.post('/get-user-login', data)
                .then(res=> {
                    console.log(res)
                    toast.success( "Loaded" )
                    console.log(res)
                    this.userLast = res
                })
        }

        /*
        confirmJwt () {
            if (this.loggedIn)
                return;
            const authStore = useAuthStroe()
            if (authStore.jwt)
            {
                fetch(authStore.combineUrl('auth/jwt'), {
                    method: 'GET',
                    headers: {
                        'authorization': authStore.jwt,
                        'Content-Type': 'application/json'
                    },
                })
                    .then(res => {
                        if (res && res.status === 200) {
                            return res.json()
                        }
                        else if (res && res.status === 401) {
                            this.clearUser()
                            authStore.forgetJwt()
                        }
                    })
                    .then(data => {
                        if (data)
                            this.updateUser(data)
                    })
            }
            else
            {
                this.clearUser()
            }
        },
         */
    }

})
