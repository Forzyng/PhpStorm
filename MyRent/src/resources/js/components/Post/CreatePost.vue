<template>
    <div v-if="!store.isLoaded">
        <!-- here put a spinner or whatever you want to indicate that a request is in progress -->
        <LoadingComponent></LoadingComponent>
    </div>
    <div class="main_bg" v-else>
        <div class="content"      >
            <div class="container_12">

                <div class="grid_8">
                    <div class="inner-block box b1">

                        <section class="slider">
                            <div class="flexslider" style="text-align: center">
                                <input ref="file" type="file">
                            </div>
                        </section>

                        <div class="project-details">
                            <div class="port-corner-top"></div>
<!--                            <h3><input v-model="title" id="Title" type="text" placeholder="Title" /> <em class="fright">Price <input v-model="price" id="Price" type="number" placeholder="Price" /> $</em></h3>

                            <ul class="listbox-1">
                                <li><span>Property Type:</span><input v-model="number_categ" id="Category" type="text" placeholder="Category" /></li>
                                <li><span>Sale Type:</span><input v-model="number_sale" id="SaleType" type="text" placeholder="Sale Type" /></li>
                                <li><span>Address:</span><input v-model="address" id="Address" type="text" placeholder="Address" /></li>
                                <li><span>Land Area:</span><input v-model="size" id="Size" type="text" placeholder="Size" /> sq.ft</li>
                                <li><span>Year Built:</span><input v-model="year" id="Year" type="text" placeholder="Year" /></li>
                                <li><span>Country:</span><input v-model="country" id="Country" type="text" placeholder="Country" /></li>
                                <li><span>City:</span><input v-model="city" id="City" type="text" placeholder="City" /></li>
                            </ul>-->
                            <input v-model="title" id="Title" type="text" placeholder="Title" />
                            <input v-model="price" id="Price" type="number" placeholder="Price" />
                            <input v-model="number_categ" id="Category" type="text" placeholder="Category" />
                            <input v-model="number_sale" id="SaleType" type="text" placeholder="Sale Type" />
                            <input v-model="size" id="Size" type="text" placeholder="Size" />
                            <input v-model="address" id="Address" type="text" placeholder="Address" />
                            <input v-model="year" id="Year" type="text" placeholder="Year" />
                            <input v-model="country" id="Country" type="text" placeholder="Country" />
                            <input v-model="city" id="City" type="text" placeholder="City" />
                            <h2>Property Description</h2>

                            <p><textarea type="text" v-model="body" placeholder="Body" style="resize: none; width: 600px; margin-bottom: 7px;" maxlength="5000" id="form10" class="md-textarea form-control" rows="3"></textarea></p>

                            <p><input v-model="toBeConfirmed" id="CheckAdm" type="text" placeholder="Check By administration?" /></p>

                            <div class="d-flex justify-content-center mb-1">
                                <button style="border-radius: 8px; border: 1px solid #b2b2b2" type="button" class="btn btn-outline-primary ms-1" id="Redact" @click="tryCreatePost">Create Post</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {usePostStore} from "../../store/posts";
import {ref} from "vue";
import LoadingComponent from "../Loading/LoadingComponent";

export default {
    name: "CreatePost",
    components: {LoadingComponent},
    setup () {
        const store = usePostStore()

        const doGetSaleTypes = function () {
            console.log('Start Getting: ')
            store.GetSaleTypes()
        }

        if(!store.isLoaded || store.isLoaded )
        {
            console.log("check")
            doGetSaleTypes()
        }

        const title = ref()
        const body = ref()
        const price = ref()
        const address = ref()
        const size = ref()
        const year = ref()
        const country = ref()
        const city = ref()
        const number_categ = ref()
        const toBeConfirmed = ref()
        const number_sale = ref()
        const file = ref(null)

        const tryCreatePost = function () {
            console.log('Start Creating: ')
            store.CreatePost(title.value, body.value, price.value, address.value, size.value,title.value, year.value, country.value, city.value, number_categ.value, toBeConfirmed.value, number_sale.value, file.value.files[0])
        }

        return {
            doGetSaleTypes, title, body,price,address,size,year,country,city,number_categ,toBeConfirmed,number_sale,file, tryCreatePost, store
        }

    }
}
</script>

<style scoped>

</style>
