<template>
    <div class="main_bg">
        <div class="content">
            <div class="container_12">
                <div class="grid_8">
                    <h2>This week's best proposals </h2>
                    <div class="img_inner ident-right-1 fleft"><img src="/frontend/images/250x156_img4.jpg" alt=""></div>
                    <div class="extra_wrapper">
                        <p class="text1"><a href="#" class="link1">Quisque nulla. Vestibulum libero nisl, porta vel, sceleris
                            que eget, malesuada at, neque. Vivamus eget nibh.</a></p>
                        <p> Etiam cursus leo metus aenean nec eros. Vestibulum ante ipsum primis in faucibus luctus et ultrices posuere cubilia curae. Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hendrerit sit amet, tincidunt ac, viverra sed, nulla.</p>
                    </div>
                    <div class="clear"></div>
                    <div class="grid_4 alpha t2">
                        <h2 class="title-effect">search by <span> Country</span></h2>
                        <div class="box b2">
                            <form id="form4" class="form-style form1" method="post">
                                <label class="text"> <span>Enter Country Name</span> </label>
                                <label class="input">
                                    <input type="text">
                                </label>
                                <div class="clear"></div>
                                <div class="alright"><a onClick="document.getElementById('form1').submit()" href="#" class="button-red ident-top-1">Search</a></div>
                            </form>
                        </div>
                    </div>
                    <div class="grid_4 omega t2">
                        <h2 class="title-effect">search by <span> House Type</span></h2>
                        <div class="box b2">
                            <form id="form2" class="form-style form1" method="post">
                                <label class="text"> <span>House Type</span> </label>
                                <label class="input">
                                    <input type="text">
                                </label>
                                <div class="clear"></div>
                                <div class="alright"><a class="button-red ident-top-1">Search</a></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="grid_4">
                    <h2 class="title-effect">Advanced <span>search</span></h2>
                    <div class="box b2">
                        <form id="form3" class="form1-1 form1" method="post">
                            <label class="text "> <span>Keyword: </span> </label>
                            <label class="input inp3">
                                <input type="text">
                            </label>
                            <div class="clear"></div>
                            <label class="text tx1"> <span>Price Range: </span> </label>
                            <label class="input inp1">
                                <input type="text">
                            </label>
                            <label class="text tx2"> <span>To:</span> </label>
                            <label class="input inp2">
                                <input type="text">
                            </label>
                            <div class="clear"></div>
                            <label class="text"> <span>Country:</span> </label>
                            <label class="input inp3">
                                <input type="text">
                            </label>
                            <div class="clear"></div>
                            <label class="text"> <span>City:</span> </label>
                            <label class="input inp3">
                                <input type="text">
                            </label>
                            <div class="clear"></div>
                            <label class="text "> <span>Property type: </span> </label>
                            <label class="input inp3">
                                <input type="text">
                            </label>
                            <div class="clear"></div>
                            <label class="text "> <span>Square Feet: </span> </label>
                            <label class="input inp3">
                                <input type="text">
                            </label>
                            <div class="clear"></div>
                            <div class="alright"><a onClick="document.getElementById('form3').submit()" href="#" class="button-red ident-top-1">Search</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main_bg">
        <section class="content">
            <div class="container_12">
                <div class="wrapper">
                    <div class=" grid_12">
                        <h2 class="fleft">All Properties</h2>
                        <!-- start Filter categories -->
                        <ul id="filter">
                            <li class="active"><a href="#" class="all">All</a></li>
                            <li><a href="#" class="openhouse">Open House</a></li>
                            <li><a href="#" class="forrent">For Rent</a></li>
                            <li><a href="#" class="forsale">For Sale</a></li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                    <ul  id="stage"      v-for="post in store.posts">
                        <li class="grid_6 p8" v-bind:data-id="'id-' + post.id" data-type="openhouse">
                            <div class="inner-block box b1"> <a class="page3-img1 fixed-img magnifier" href="/frontend/images/image-blank.png"><img  v-bind:src="'/storage/' + post.image" alt=""><span></span></a>
                                <div class="port-title">
                                    <div class="port-corner-top"></div>
                                    <h2 v-text="post.title"></h2>
                                    <ul class="listbox-1">
                                        <li><span>Property Type:</span><a href="#" v-text="post.category_id"></a></li>
                                        <li><span>Address:</span><a href="#" v-text="post.address"></a></li>
                                        <li><span>Year Built:</span><a href="#" v-text="post.year"></a></li>
                                        <li><span>Building Size (sq ft):</span><a href="#" v-text="post.size"> </a></li>
                                        <li><span>Country:</span><a href="#" v-text="post.country"> </a></li>
                                        <li><span>City:</span><a href="#" v-text="post.city"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="clear"></div>
                    <a href="#" id="loadMore" @click="doGetMorePosts">Load More</a>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
import {usePostStore} from "../store/posts";

export default {
    name: "PostsPage",
    setup() {
        const store = usePostStore()
        const doGetMorePosts = function () {
            store.getMorePosts()
        }
        if(store.total === 0)
            console.log("First do")
            doGetMorePosts()
        return {
            store, doGetMorePosts
        }
    }
}
</script>

<style scoped>
#loadMore {
    width: 200px;
    color: #fff;
    display: block;
    text-align: center;
    margin: 20px auto;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: blue;
    transition: .3s;
}
#loadMore:hover {
    color: blue;
    background-color: #fff;
    border: 1px solid blue;
    text-decoration: none;
}
</style>
