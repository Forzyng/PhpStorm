<template>
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
            <h2 class="title-effect">search by <span> City</span></h2>
            <div class="box b2"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant velit doloreme laudantium, totam aperiam, eaque ipsa quae.
                <form id="form4" class="form-style form1" method="post">
                    <label class="text"> <span>Enter City Name</span> </label>
                    <label class="input">
                        <input type="text">
                    </label>
                    <div class="clear"></div>
                    <div class="alright"><a href="#" class="button-red ident-top-1">Search</a></div>
                </form>
            </div>
        </div>
        <div class="grid_4 omega t2">
            <h2 class="title-effect">search by <span> House Type</span></h2>
            <div class="box b2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant velit doloreme laudantium, totam aperiam, eaque ipsa quae.
                <form id="form2" class="form-style form1" method="post">
                    <label class="text "> <span>House Type: </span> </label>
                    <label class="input inp3">
                        <input type="text">
                    </label>
                    <div class="clear"></div>
                    <div class="alright"><a onClick="document.getElementById('form2').submit()" href="#" class="button-red ident-top-1">Search</a></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HouseSearch"
}
</script>

<style scoped>

</style>
