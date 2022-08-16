<template>
    <div v-if="!store.isLoaded">
        <!-- here put a spinner or whatever you want to indicate that a request is in progress -->
        <LoadingComponent></LoadingComponent>
    </div>
    <div>
    <div class="row-2">
        <div class="container_12">
            <!-- Search  -->
            <div class="grid_12">
                <form id="form5" class="form1-1 form2" method="post">
                    <div class="fix-w">
                        <label class="text"> <span>Name: </span> </label>
                        <label class="input">
                            <input type="text">
                        </label>
                    </div>
                    <div class="fix-w">
                        <label class="text"> <span>Email: </span> </label>
                        <label class="input">
                            <input type="text">
                        </label>
                    </div>

                    <div class="form-button"><a onClick="document.getElementById('form4').submit()" href="#" class="button-red">Search</a></div>
                </form>
            </div>
        </div>
    </div>
    <div class="main_bg" v-if="store.users">
        <div class="grid_12">
            <h2 class="p2">Agents</h2>
        </div>
        <section class="content" v-for="user in store.users">
            <div class="container_12">
                <div class="wrapper">

                    <div class="ident-bot-2" >
                        <div class="grid_3"> <a v-bind:href="'http://127.0.0.1:8000/users/' + user.login"><img class="img_inner fleft" v-bind:src="'/storage/' + user.avatar" alt=""> </a></div>
                        <div class="grid_6">
                            <div class="team-text ident-bot-1">
                                <h3 v-text="user.name"></h3>
                                <a v-bind:href="'http://127.0.0.1:8000/users/' + user.login" class="link-name">Profile</a>
                                <p class="ident-top-1" v-text="user.description"> </p>
                            </div>
                        </div>
                        <div class="grid_3">
                            <div class="team-contact-info">
                                <address>
                                    <dl class="ident-bot-2">
                                        <dd><span>Phone:</span> +1 100 123 6580</dd>
                                        <dd><span>Mobile:</span> +1 200 123 6035</dd>
                                        <dd><span>FAX:</span> +1 300 123 989</dd>
                                        <dd><span>E-mail:</span> <a class="link-1" href="#" v-text="user.email"> </a></dd>
                                    </dl>
                                </address>
                                <ul class="social">
                                    <li><a href="#"><img class="img-1" alt="" src="/frontend/images/icons/icon1.png"><img class="img-2" alt="" title="Facebook" src="/frontend/images/icons/icon1-hover.png"></a></li>
                                    <li><a href="#"><img class="img-1" alt="" src="/frontend/images/icons/icon2.png"><img class="img-2" alt="" title="Flickr" src="/frontend/images/icons/icon2-hover.png"></a></li>
                                    <li><a href="#"><img class="img-1" alt="" src="/frontend/images/icons/icon3.png"><img class="img-2" alt="" title="Twitter" src="/frontend/images/icons/icon3-hover.png"></a></li>
                                </ul>
                                <a class="button-red ident-top-2" href="#">Send Message</a> </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <a href="#" id="loadMore" @click="doGetMoreUsers">Load More</a>
    </div>
    <div v-else style="text-align: center">
        0oopsss. It seems like there is no posts
    </div>
    </div>
</template>

<script>
import {useUserStore} from "../store/user";
import LoadingComponent from "../components/Loading/LoadingComponent";

export default {
    name: "AgentsPage",
    components: {LoadingComponent},
    setup() {
        const store = useUserStore()
        const doGetMoreUsers = function () {
            store.getMoreUsers()
        }
        if(store.total === 0)
            doGetMoreUsers()
        return {
            store, doGetMoreUsers
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
