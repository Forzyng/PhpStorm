<template>
    <section style="background-color: #ebebeb;">
        <div class="container py-5">

            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src="http://127.0.0.1:8000/storage/users/default.png" alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
                            <h5 class="my-3">{{ UserLogin }}</h5>
                            <p class="text-muted mb-1"> {{ UserFullName }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb20" style="text-align:center">
                            <h5 class="text-muted mb-0">0</h5>
                            <h6 class="text-small text-muted">Deals</h6>
                        </div>
                        <div class="col-md-6 mb20" style="text-align:center">
                            <h5 class="text-muted mb-0">0</h5>
                            <h6 class="text-small text-muted">Posts</h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Here from</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0" id="CreatedAt">{{ UserCreatedAt }}</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row" v-if="UserFullName">
                                <div class="col-sm-3">
                                    <p class="mb-0" id="UpdatedAt">Full name</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0" id="Fullname">{{ UserFullName }}</p>
                                </div>
                            </div>
                            <hr v-if="UserFullName">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Login</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0" id="Login">{{ UserLogin }}</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row" v-if="UserDescription">
                                <div class="col-sm-3">
                                    <p class="mb-0">Description</p>
                                </div>
                                <div class="col-sm-9">

                                    <p class="text-muted mb-0" id="Description">{{ UserDescription }}</p>
                                </div>
                            </div>
                            <hr v-if="UserDescription">

                        </div>
                    </div>
                    <!---->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card mb-4 mb-md-0">

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {useUserStore} from "../../store/user";
export default {
    name: "OneUserProfile",
    setup () {
        const store = useUserStore()

        const dogetUserByLogin = function () {
            console.log('get')
            store.getUserByLogin("Fozzy")
        }

        if(!store.isLoaded || store.isLoaded )
        {
            dogetUserByLogin()
        }

        const UserLogin = store.userLast.login
        const UserEmail = store.userLast.email
        const UserDescription = store.userLast.description
        const UserCreatedAt = store.userLast.created_at.toLocaleString()
        const UserFullName = store.userLast.name

        return {
             UserLogin, UserEmail, UserDescription, UserCreatedAt, UserFullName, dogetUserByLogin
        }
    }
}
</script>

<style scoped>

</style>
