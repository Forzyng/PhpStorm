<template>
<BlogIndex></BlogIndex>
</template>

<script>
import FormLogin from "./Auth/FormLogin";
import BlogIndex from "./BlogIndex";
export default {
    name: "Welcome",
    components: {BlogIndex, FormLogin}
}
</script>

<style scoped>

</style>
