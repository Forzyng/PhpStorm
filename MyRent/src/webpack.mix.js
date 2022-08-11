const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

/*mix.styles([
    'public/css/app.css',
    'public/css/carousel.css',
    'public/css/elements.css',
    'public/css/flexslider.css',
    'public/css/font-awesome.css',
    'public/css/form.css',
    'public/css/inner.css',
    'public/css/rateit.css',
    'public/css/reset.css',
    'public/css/skeleton.css',
    'public/css/style.css',
    'public/css/superfish.css',
    'public/css/touchTouch.css',
    'public/css/camera.css'
], 'public/css/all.css');

mix.combine('public/js', 'public/js/all-files.js');*/
