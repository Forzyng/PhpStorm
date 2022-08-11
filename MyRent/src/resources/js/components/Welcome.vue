<template>
<header-routes></header-routes>
    <router-view/>
    <static-footer></static-footer>
</template>

<script>

import HeaderRoutes from "./HeadAndFooter/Header-Routes";
import StaticFooter from "./HeadAndFooter/StaticFooter";
export default {
    name: "Welcome",
    components: {StaticFooter, HeaderRoutes}
}
</script>



<!--<style>
@import 'public/frontend/css/style.css';
</style>-->
