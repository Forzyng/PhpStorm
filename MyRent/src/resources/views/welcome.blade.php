<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="/frontend/fonts/fontawesome-webfont.eot" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Styles -->
    <style>
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}a{background-color:transparent}[hidden]{display:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}a{color:inherit;text-decoration:inherit}svg,video{display:block;vertical-align:middle}video{max-width:100%;height:auto}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-t{border-top-width:1px}.flex{display:flex}.grid{display:grid}.hidden{display:none}.items-center{align-items:center}.justify-center{justify-content:center}.font-semibold{font-weight:600}.h-5{height:1.25rem}.h-8{height:2rem}.h-16{height:4rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.leading-7{line-height:1.75rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mt-8{margin-top:2rem}.ml-12{margin-left:3rem}.-mt-px{margin-top:-1px}.max-w-6xl{max-width:72rem}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.p-6{padding:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pt-8{padding-top:2rem}.fixed{position:fixed}.relative{position:relative}.top-0{top:0}.right-0{right:0}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-center{text-align:center}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.underline{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-5{width:1.25rem}.w-8{width:2rem}.w-auto{width:auto}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width:640px){.sm\:rounded-lg{border-radius:.5rem}.sm\:block{display:block}.sm\:items-center{align-items:center}.sm\:justify-start{justify-content:flex-start}.sm\:justify-between{justify-content:space-between}.sm\:h-20{height:5rem}.sm\:ml-0{margin-left:0}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\:pt-0{padding-top:0}.sm\:text-left{text-align:left}.sm\:text-right{text-align:right}}@media (min-width:768px){.md\:border-t-0{border-top-width:0}.md\:border-l{border-left-width:1px}.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\:px-8{padding-left:2rem;padding-right:2rem}}@media (prefers-color-scheme:dark){.dark\:bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.dark\:bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.dark\:border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.dark\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark\:text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.dark\:text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--tw-text-opacity))}}
    </style>
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/style.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/camera.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/carousel.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/elements.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/flexslider.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/form.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/inner.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/rateit.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/skeleton.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/superfish.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/frontend/css/touchTouch.css">


<!--    <script type="text/javascript" src="/frontend/js/accordion.js"></script>
    <script type="text/javascript" src="/frontend/js/camera.js"></script>
    <script type="text/javascript" src="/frontend/js/custom.js"></script>
    <script type="text/javascript" src="/frontend/js/filter_setting.js"></script>
    <script type="text/javascript" src="/frontend/js/forms.js"></script>
    <script type="text/javascript" src="/frontend/js/script.js"></script>
    <script type="text/javascript" src="/frontend/js/superfish.js"></script>
    <script type="text/javascript" src="/frontend/js/tabs.js"></script>
    <script type="text/javascript" src="/frontend/js/touchTouch.js"></script>-->

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>
<body class="antialiased">

<div class="container">
    <div id="app" class="row"></div>
</div>
<script src="{{ mix('js/app.js') }}"></script>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</html>


<!--
<title>Real Estate</title>
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no"/>
<link rel="icon" href="public/frontend/images/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="public/frontend/images/favicon.ico" type="image/x-icon"/>
&lt;!&ndash; Stylesheet  &ndash;&gt;
<link rel="stylesheet" type="text/css" media="screen" href="public/frontend/css/style.css">
&lt;!&ndash; Jquery Start  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/jquery.js"></script>
<script type="text/javascript" src="public/frontend/js/script.js"></script>
&lt;!&ndash; Rating Star  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/jquery.rateit.js"></script>
&lt;!&ndash; Navigation  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/superfish.js"></script>
<script type="text/javascript" src="public/frontend/js/jquery.responsivemenu.js"></script>
<script type="text/javascript" src="public/frontend/js/jquery.mobilemenu.js"></script>
&lt;!&ndash; Hover Effect  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/jquery.hoverIntent.minified.js"></script>
&lt;!&ndash; Easing  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/jquery.easing.1.3.js"></script>
&lt;!&ndash; Camera Slider  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/camera.js"></script>
&lt;!&ndash; Accordion  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/accordion.js"></script>
&lt;!&ndash; Tabs  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/tabs.js"></script>
&lt;!&ndash; Carsoule  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/jquery.carouFredSel-6.1.0-packed.js"></script>
&lt;!&ndash; A gallery optimized for touch devices  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/touchTouch.jquery.js"></script>
<script type="text/javascript" src="public/frontend/js/jquery.touchSwipe.min.js"></script>
&lt;!&ndash; forms  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/forms.js"></script>
&lt;!&ndash; Portfolio &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/jquery.hoverdir.js"></script>
<script type="text/javascript" src="public/frontend/js/jquery.quicksand.js"></script>
<script type="text/javascript" src="public/frontend/js/filter_setting.js"></script>
&lt;!&ndash; Custom  &ndash;&gt;
<script type="text/javascript" src="public/frontend/js/custom.js"></script>
&lt;!&ndash;[if (gt IE 9)|!(IE)]>&lt;!&ndash;dash;&gt;
<script type="text/javascript" src="public/frontend/js/jquery.mobile.customized.min.js"></script>
&lt;!&ndash;<![endif]&ndash;&gt;
<script>
    $(document).ready(function(){
        jQuery('#camera_wrap').camera({
            loader: false,
            pagination: true,
            thumbnails: false,
            height: '452px',
            caption: false,
            navigation: false,
            fx: 'random'
        });
    });

    $(window).load (
        function(){$('.carousel1').carouFredSel({auto: false, prev: '.prev1',next: '.next1', width: 186, items: {
                visible : {min: 2,
                    max: 3
                },
                height: 'auto',
                width: 110,

            }, responsive: true,

            scroll: 1,

            mousewheel: false,

            swipe: {onMouse: true, onTouch: true}});

        } );

    $(window).load( function(){
        jQuery('.magnifier').touchTouch();
    });

</script>-->
