<?php

use App\Http\Controllers\Api\NewPasswordController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::post('/email/verify', [AuthController::class], 'email_verify');
});

Route::post('forgot-password', [NewPasswordController::class, 'forgotPassword']);
Route::post('reset-password', [NewPasswordController::class, 'reset']);

Route::get('/users', function (Request $request) {
    $per_page = $request->input('per_page', 1); // Сколько на страницу
    $page = $request->input('page', 1); // Какая страница

    return \App\Models\User::paginate($per_page);
});

Route::get('/offers', function (Request $request) {
    $per_page = $request->input('per_page', 1); // Сколько на страницу
    $page = $request->input('page', 1); // Какая страница

    return \App\Models\Post::paginate($per_page);
});

Route::post('get-posts', [\App\Http\Controllers\Api\UserPostController::class, 'getPostsByUserId']);
Route::post('get-user-login', [\App\Http\Controllers\Api\UserPostController::class, 'getUserByLogin']);
