<template>
    <div v-if="!store.isLoaded">
        <!-- here put a spinner or whatever you want to indicate that a request is in progress -->
        <LoadingComponent></LoadingComponent>
    </div>
    <div class="main_bg" v-else>
        <div class="content"      >
            <div class="container_12">

                <div class="grid_12">
                    <div class="inner-block box b1">

                        <section class="slider"  v-if="store.postLast.image">
                            <div class="flexslider" style="text-align: center">
                                <a class="page3-img1 fixed-img magnifier" v-bind:href="'/storage/' + store.postLast.image">
                                    <img v-bind:src="'/storage/' + store.postLast.image">
                                </a>
                            </div>
                        </section>

                        <div class="project-details">
                            <div class="port-corner-top"></div>
                            <h3>{{store.postLast.title }} <em class="fright">Price {{store.postLast.price }} $</em></h3>

                            <ul class="listbox-1">
                                <li><span>Property Type:</span><a href="#">{{store.postLast.category.name }}</a></li>
                                <li v-if="store.postLast.sale_type"><span>Sale Type:</span><a href="#">{{store.postLast.sale_type.name}}</a></li>
                                <li><span>Address:</span><a href="#">{{store.postLast.address }}</a></li>
                                <li><span>Land Area:</span><a href="#">{{store.postLast.size }} sq.ft</a></li>
                                <li><span>Year Built:</span><a href="#">{{store.postLast.year }}</a></li>
                                <li><span>Country:</span><a href="#">{{store.postLast.country }}</a></li>
                                <li><span>City:</span><a href="#">{{store.postLast.city }}</a></li>
                            </ul>


                            <h2 v-if="store.postLast.description">Property Description</h2>

                            <p v-if="store.postLast.description">{{store.postLast.description }}</p>


                        </div>
                    </div>
                </div>




                </div>
            </div>
        </div>

</template>

<script>
import LoadingComponent from "../Loading/LoadingComponent";
import {usePostStore} from "../../store/posts";
import {useRoute} from "vue-router/dist/vue-router";
export default {
    name: "RedactPost",
    components: {LoadingComponent},
    setup() {
        const store = usePostStore()
        const route = useRoute()
        const doGetSaleTypes = function () {
            console.log('Start Getting: ')
            store.GetSaleTypes()
        }

        if(!store.isLoaded || store.isLoaded )
        {
            console.log("check")
            doGetSaleTypes()
        }

        const dogetPostBySlug = function () {
            console.log('get')
            store.getPostBySlug(route.params.slug)
        }

        if(!store.isLoaded || store.isLoaded )
        {
            dogetPostBySlug()
        }

        return {
            dogetPostBySlug, doGetSaleTypes, store
        }
    }
}
</script>

<style scoped>

</style>
