import { defineStore } from 'pinia'
import {api} from './api'
import {useToastStore} from "./toast";
import {useUserStore} from "./user";
import router from "../router";

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [],
        total: 0, // общее количество загруженных постов
        per_page: 2, // количество постов на страницу
        page: 0, // текущая страница
        isCanMore: true,
        postLast: null,
        isLoaded: false,
        isUserPost: false,
        Categories: null,
        SaleTypes: null
    }),
    getters: {
    },
    actions: {

        GetCategories()
        {
            //get-categories
            api.get("/get-categories")
                .then(res => {
                    if(res)
                    {
                        console.log('getData: ')
                        console.log(res)
                        this.Categories = res
                        this.isLoaded = true;
                    }


                })
        },
        GetSaleTypes()
        {
            console.log("check before")
            this.isLoaded = false;
            //get-sale-types
            api.get("/get-sale-types")
                .then(res => {
                    if(res)
                    {
                        console.log('getData: ')
                        console.log(res)
                        this.SaleTypes = res
                        this.GetCategories()
                    }


                })

        },
        CreatePost(title, body, price, address, size, year, country, city, number_categ, toBeConfirmed, number_sale, image)
        {

                const storeUser = useUserStore()
                const author_id = storeUser.user.id
                const toast = useToastStore()
                const data = new FormData()
                if(toBeConfirmed !== true)
                {
                    data.append('toBeConfirmed', null);
                }
                else {
                    data.append('toBeConfirmed', toBeConfirmed);
                }
                data.append('title', title);
                data.append('body', body);
                data.append('price', price);
                data.append('address', address);
                data.append('size', size);
                data.append('year', year);
                data.append('country', country);
                data.append('city', city);
                data.append('category_id', number_categ);
                data.append('author_id', author_id);
                data.append('sale_type_id', number_sale);
                data.append('file', image);

            /*    console.log(title)
            console.log(body)

            console.log(size)
            console.log(address)
            console.log(price)
            console.log(number_categ)
            console.log(number_sale)*/


            api.post('/create-post', data)
                .then(res=> {
                    console.log(res)
                    // toast.success( "Loaded" )
                    if(res)
                    {
                        console.log(res)

                        if(!res.error)
                        {
                            this.updateUser(res)
                            toast.success( "Post created" )
                        }
                        else {
                            toast.error( res.error )
                        }
                        router.push('/my-profile')
                    }

                })

              /*  fetch('http://127.0.0.1:8000/api/create-post', {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        authorization: localStorage.getItem('jwt')
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *client
                    body: data // body data type must match "Content-Type" header
                })
                    .then(res => {
                        return res.json()
                    })
                    .then(json => {

                        console.log(json)

                        if(!json.error)
                        {
                            this.updateUser(json)
                            toast.success( "Post created" )
                        }
                        else {
                            toast.error( json.error )
                        }
                        router.push('/my-profile')
                        // dispatch('nullingData')
                        // this.$router.push({ name: 'home' })
                    })
                    .catch(err => {
                        toast.error( err )

                    })*/

           /* }else
            {
                toast.info("Everything is must be filled")
            }*/

        },

        getPostBySlug(slug)
        {
            this.isUserPost = false
            this.isLoaded = false
            const toast = useToastStore()
            const data = new FormData()
            data.append('slug', slug);

            api.post('/get-post-slug', data)
                .then(res=> {
                    console.log(res)
                   // toast.success( "Loaded" )
                        if(res)
                        {
                            this.postLast = res
                            this.isLoaded = true

                            const userStore = useUserStore()

                            if(this.postLast.author_id.id === userStore.user.id)
                            {
                                this.isUserPost = true
                            }
                            else {
                                router.push('/home')
                            }

                            if(!this.postLast.image.includes("-medium.jpg") && !this.postLast.image.includes("-medium.jpeg") && !this.postLast.image.includes("-medium.png") && !this.postLast.image.includes("-medium.webp"))
                            {
                                this.postLast.image = this.postLast.image.replace(".jpg", "-medium.jpg");
                                this.postLast.image = this.postLast.image.replace(".jpeg", "-medium.jpeg");
                                this.postLast.image = this.postLast.image.replace(".png", "-medium.png");
                                this.postLast.image = this.postLast.image.replace(".webp", "-medium.webp");
                            }
                        }

                })
        },
        // Получить посты
        getMorePosts(){

            console.log("Get post")
            if (this.page * this.per_page > this.total) {
                this.isCanMore = false
                return
            }
            this.page++
            this.isLoaded = false;
            let url = '/offers/?page=' + this.page + '&per_page=' + this.per_page
            console.log('get new posts: ' + url)

            api.get(url)
                .then(res => {
                    if(res)
                    {
                        this.total = res.total
                        console.log('getData: ')
                        console.log(res.data)
                        this.posts = this.posts.concat(res.data)

                        this.posts.forEach((value, index) => {
                            if(!value.image.includes("-medium.jpg") && !value.image.includes("-medium.jpeg") && !value.image.includes("-medium.png") && !value.image.includes("-medium.webp"))
                            {
                                value.image = value.image.replace(".jpg", "-medium.jpg");
                                value.image = value.image.replace(".jpeg", "-medium.jpeg");
                                value.image = value.image.replace(".png", "-medium.png");
                                value.image = value.image.replace(".webp", "-medium.webp");
                            }
                            console.log(value);
                            console.log(index);
                        });
                        this.isLoaded = true;
                    }


                })
        }

    }
})
