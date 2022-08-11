<template>
    <div class="container_12" style="background: #e5e5e5;">
        <div class="grid_12 call-top" >

        </div>
        <div class="grid_8">
            <div class="slider_wrapper t2">
                <div>
                    <div id="camera_wrap" class="">
                        <img src="/frontend/images/jll-real-estate.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div class="grid_4">
            <h2 class="title-effect t2"> Latest <span>Listings </span> </h2>
            <ul class="l_list">
                <li><a href="#"><img src="/frontend/images/99x92-img1.jpg" alt="">
                    <div class="extra_wraper">
                        <div class="title-text">Property #1 </div>
                        Envato, Melbourne <span class="item-value">$123,000</span>
                        <input type="range" value="4" step="0.25" id="backing1">
                        <div class="rateit" data-rateit-backingfld="#backing1" data-rateit-resetable="false"  data-rateit-ispreset="true"
                             data-rateit-min="0" data-rateit-max="5"> </div>
                    </div>
                </a></li>
                <li><a href="#"><img src="/frontend/images/99x92-img2.jpg" alt="">
                    <div class="extra_wraper">
                        <div class="title-text">Property #2</div>
                        Envato, Melbourne <span class="item-value">$123,000</span>
                        <input type="range" value="4" step="0.25" id="backing2">
                        <div class="rateit" data-rateit-backingfld="#backing2" data-rateit-resetable="false"  data-rateit-ispreset="true"
                             data-rateit-min="0" data-rateit-max="5"> </div>
                    </div>
                </a></li>
                <li><a href="#"><img src="/frontend/images/99x92-img3.jpg" alt="">
                    <div class="extra_wraper">
                        <div class="title-text">Property #3</div>
                        Envato, Melbourne <span class="item-value">$123,000</span>
                        <input type="range" value="4" step="0.25" id="backing3">
                        <div class="rateit" data-rateit-backingfld="#backing3" data-rateit-resetable="false"  data-rateit-ispreset="true"
                             data-rateit-min="0" data-rateit-max="5"> </div>
                    </div>
                </a></li>
                <li><a href="#"><img src="/frontend/images/99x92-img4.jpg" alt="">
                    <div class="extra_wraper">
                        <div class="title-text">Property #4</div>
                        Envato, Melbourne <span class="item-value">$123,000</span>
                        <input type="range" value="4" step="0.25" id="backing4">
                        <div class="rateit" data-rateit-backingfld="#backing4" data-rateit-resetable="false"  data-rateit-ispreset="true"
                             data-rateit-min="0" data-rateit-max="5"> </div>
                    </div>
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "LatestProperties"
}
</script>

<style scoped>

</style>
