<?php

namespace App\Http\Controllers;

use Barryvdh\Debugbar\Facades\Debugbar;
use App\Models\Profile;
use Doctrine\Common\Cache\Cache;
use GuzzleHttp\Psr7\Query;
use Illuminate\Http\Request;
use App\Models\User;

class RelController extends Controller
{
    public function oneToOne()
    {
        //$allPost = Post::all();
        /*$sozdal = User::Query()
            ->where('email','sozdalnewakk@gmail.com')->first();

        echo $sozdal->profile;*/
    /*    $sozdal = Cache::get('sozdal', function () {
            $putToCache = User::Query()
                ->where('email','sozdalnewakk@gmail.com')
                ->with('profile')
                ->first();
            Cache::put('sozdal', $putToCache, 360);
            return $putToCache;
        });

        //Cache::forget('sozdal');

        Debugbar::info($sozdal->toArray());*/

        $profile = Profile::find(1);
        Debugbar::info($profile->toArray());
        Debugbar::info($profile->user->toArray());
        return view('home');
    }

    public function oneToMany()
    {
        //$allPost = \App\Models\Post::query()->with('category')->get();
        //Debugbar::info($allPost->toArray());
        $somePost = \App\Models\Category::find(3)->posts;
        Debugbar::info($somePost);
        return view('home');
    }

    public function manyToMany()
    {
        //$tags = Tag::all();
        $taged = \App\Models\Tag::query()->where('id',3)->first()->posts;
        $posts = \App\Models\Tag::find(3)->posts;
        $tags = \App\Models\Tag::query()->where('id',3)->with('posts')->get();
        Debugbar::info($tags);
        return view('home');
    }
}
