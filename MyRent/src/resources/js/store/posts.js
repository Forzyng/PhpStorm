import { defineStore } from 'pinia'
import {api} from './api'

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [],
        total: 0, // общее количество загруженных постов
        per_page: 2, // количество постов на страницу
        page: 0, // текущая страница
        isCanMore: true
    }),
    getters: {

    },
    actions: {
        // Получить посты
        getMorePosts(){
            console.log("Get post")
            if (this.page * this.per_page > this.total) {
                this.isCanMore = false
                return
            }
            this.page++

            let url = '/offers/?page=' + this.page + '&per_page=' + this.per_page
            console.log('get new posts: ' + url)

            api.get(url)
                .then(res => {
                    this.total = res.total
                    console.log('getData: ')
                    console.log(res.data)
                    this.posts = this.posts.concat(res.data)

                    this.posts.forEach((value, index) => {
                        if(!value.image.includes("-medium.jpg") && !value.image.includes("-medium.jpeg") && !value.image.includes("-medium.png"))
                        {
                            value.image = value.image.replace(".jpg", "-medium.jpg");
                            value.image = value.image.replace(".jpeg", "-medium.jpeg");
                            value.image = value.image.replace(".png", "-medium.png");
                        }
                        console.log(value);
                        console.log(index);
                    });

                })
        }

    }
})
