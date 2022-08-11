<?php

namespace App\Http\Controllers\Api;


use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class UserPostController extends Controller
{


    public function getPostsByUserId(Request $request): \Illuminate\Database\Eloquent\Collection|array
    {
        //return User::find($request->user_id)->posts;
        return \App\Models\Post::query()->where('author_id', $request->user_id)->get();
    }

    public function getUserByLogin(Request $request)
    {
        return \App\Models\User::query()->where('login', $request->login)->get()->first();
    }

    public function getUserByAuthorId(Request $request)
    {

    }
}
