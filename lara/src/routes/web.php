<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('pages.about',
    [
        'records' => [1,2,3],
        'forCase' => 1
    ]);
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/entity', [App\Http\Controllers\EntityController::class, 'index'])->name('entity.read.all');

Route::post('/entity', [App\Http\Controllers\EntityController::class, 'store'])->name('entity.store');

Route::get('/rel/one-to-one', [App\Http\Controllers\RelController::class, 'oneToOne'])->name('rel');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
