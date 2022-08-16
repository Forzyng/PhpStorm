<?php

namespace App\Http\Controllers\Api;


use App\Models\Post;
use App\Models\SaleType;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use Mockery\Exception;
use TCG\Voyager\Models\Category;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserPostController extends Controller
{

    public function DeleteUser(Request $request)
    {
        if(\App\Models\User::where('id', $request->id)->get()->first() === null)
        {
            return response()->json([
                'error' => 'This user doesn`t exist'
            ]);
        }
        \App\Models\User::where('id', $request->id)->delete();
        return response()->json([
            'status' => 'Deleted'
        ]);
    }

    public function DeletePost(Request $request)
    {
        if(\App\Models\Post::where('id', $request->id)->get()->first() === null)
        {
            return response()->json([
                'error' => 'This post doesn`t exist'
            ]);
        }
        \App\Models\Post::where('id', $request->id)->delete();
        return response()->json([
            'status' => 'Deleted'
        ]);
    }

    public function getPostsByUserId(Request $request): \Illuminate\Database\Eloquent\Collection|array
    {

        //return User::find($request->user_id);
        return \App\Models\Post::query()->where('author_id', $request->user_id)->with('category')->with('sale_type')->get();
    }

    public function getPostBySlug(Request $request)
    {
        return \App\Models\Post::query()->where('slug', $request->slug)->with('category')->with('sale_type')->with('authorId')->get()->first();
    }



    public function getUserByLogin(Request $request)
    {
   /*     $user = JWTAuth::user();
        if ($user)
            return \App\Models\User::query()->where('login', $request->login)->get()->first();
        return response()->json([
            'status' => 'Unavailable JWT'
        ]);*/

       /* $user = request()->bearerToken();
        if(!$user)*/

        return \App\Models\User::query()->where('login', $request->login)->get()->first();

    }





//$sorted = Model::orderBy('name')->paginate(10);
    public function getPostsByCategory(Request $request)
    {
        $Category = Category::query()->where('slug', $request->category_slug)->get()->first();
        if(!$Category)
        {
            return response()->json([
                'error' => 'Unavailable Category slug'
            ]);
        }
        $per_page = $request->input('per_page', 1); // Сколько на страницу
        return  \App\Models\Post::query()->where('category_id',$Category->id)->with('category')->with('sale_type')->with('authorId')->paginate($per_page);

    }

    public function getPostsBySaleType(Request $request)
    {
        $SaleType = SaleType::query()->where('slug', $request->Sale_type_slug)->get()->first();
        if(!$SaleType)
        {
            return response()->json([
                'error' => 'Unavailable Category slug'
            ]);
        }
        $per_page = $request->input('per_page', 1); // Сколько на страницу
        return  \App\Models\Post::query()->where('sale_type_id',$SaleType->id)->with('category')->with('sale_type')->with('authorId')->paginate($per_page);

    }

    public function NewGuid()
    {
        $s = strtoupper(md5(uniqid(rand(), true)));
        $guidText =
            substr($s, 0, 8) . '-' .
            substr($s, 8, 4) . '-' .
            substr($s, 12, 4) . '-' .
            substr($s, 16, 4) . '-' .
            substr($s, 20);
        return $guidText;
    }

    public function getCategories()
    {
        return Category::query()->get();
    }

    public function getSaleTypes()
    {
        return \App\Models\SaleType::query()->get();
    }



    //Model::where('somecolumn', $somevalue)>update(['name', $newName]);
    //User::where('user_id',1)->update(array(
    //                         'username'=>$username,
    //));

    public function UpdateUser(Request $request)
    {
        try {


        if($request->description !== null)
        {
            \App\Models\User::where('id', $request->id)->update(array('description'=>$request->description));
        }

        if($request->name !== null)
        {
            \App\Models\User::where('id', $request->id)->update(array('name'=>$request->name));
        }

        if($request->file('image') !== null)
        {
            $classifiedImg = $request->file('image');
            $Seed =  $this->NewGuid();
            $filename_converted = $Seed;
            $image_converted = Image::make($classifiedImg)->encode('webp', 90)->resize(250, 250)->save(public_path('storage/users/' . $filename_converted . '.webp'));

            $FileName = "users/" . $filename_converted . '.webp';

            \App\Models\User::where('id', $request->id)->update(array('avatar'=>$FileName));
        }

        return \App\Models\User::where('id', $request->id)->get()->first();
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ]);
        }
    }

    public function UpdateUserPrivacy(Request $request)
    {
        if($request->password !== $request->password_confirmation)
        {
            return response()->json([
                'error' => "Doesn`t match passwords"
            ]);
        }
        if($request->password !== null)
        {
            \App\Models\User::where('id', $request->id)->update(array('password'=>bcrypt($request->password)));
        }

        return \App\Models\User::where('id', $request->id)->get()->first();
    }


    public function UpdatePost(Request $request)
    {
        try {
            //post-> user->
$post = \App\Models\Post::where('id', $request->post_id)->get()->first();
            if($post ===null)
            {
                return response()->json([
                    'error' => "No post"
                ]);
            }


            if($post->author_id !== (int)$request->user_id)
            {
                return response()->json([
                    'error' => "Not author",
                    "user_id" => $request->user_id,
                    "post_author_id" => $post->author_id
                ]);
            }



            $status = "PUBLISHED";
            if($request->toBeConfirmed)
            {
                $status = "DRAFT";
                \App\Models\Post::where('id', $request->post_id)->update(array('status'=>$status));
            }
            if ($request->file('file')) {
                $classifiedImg = $request->file('file');
                $Seed =  $this->NewGuid();
                $filename_converted = $Seed;
                $filename_small = $Seed . "-small";
                $filename_medium = $Seed . "-medium";
                $image_small = Image::make($classifiedImg)->encode('webp', 90)->resize(250, 160)->save(public_path('storage/posts/' . $filename_small . '.webp'));
                $image_medium = Image::make($classifiedImg)->encode('webp', 90)->resize(500, 320)->save(public_path('storage/posts/' . $filename_medium . '.webp'));
                $image_converted = Image::make($classifiedImg)->encode('webp', 90)->resize(1000, 640)->save(public_path('storage/posts/' . $filename_converted . '.webp'));

                $FileName = "posts/" . $filename_converted . '.webp';

                \App\Models\Post::where('id', $request->post_id)->update(array('image'=>$FileName));
            }
            /*

                "address" => $request->address,
                "size" => $request->size,
                "year" => $request->year,
                "country" => $request->country,
                "city" => $request->city,
                "category_id" => $category->id,
                "sale_type_id" => $category->id,*/
            if($request->body !== null)
            {
                \App\Models\Post::where('id', $request->post_id)->update(array('body'=>$request->body));
            }
            if($request->address !== null)
            {
                \App\Models\Post::where('id', $request->post_id)->update(array('address'=>$request->address));
            }
            if($request->size !== null)
            {
                \App\Models\Post::where('id', $request->post_id)->update(array('size'=>$request->size));
            }
            if($request->year !== null)
            {
                \App\Models\Post::where('id', $request->post_id)->update(array('year'=>$request->year));
            }
            if($request->country !== null)
            {
                \App\Models\Post::where('id', $request->post_id)->update(array('country'=>$request->country));
            }
            if($request->city !== null)
            {
                \App\Models\Post::where('id', $request->post_id)->update(array('city'=>$request->city));
            }
            if($request->price !== null)
            {
                \App\Models\Post::where('id', $request->post_id)->update(array('price'=>$request->price));
            }
            if($request->category_id !== null)
            {
                if(Category::find($request->category_id) !== null)
                \App\Models\Post::where('id', $request->post_id)->update(array('category_id'=>$request->category_id));
            }
            if($request->sale_type_id !== null)
            {
                if(\App\Models\SaleType::find($request->sale_type_id) !== null)
                    \App\Models\Post::where('id', $request->post_id)->update(array('sale_type_id'=>$request->sale_type_id));
            }

            return \App\Models\Post::where('id', $request->post_id)->get()->first();
        }catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ]);
        }


    }


    public function createPost(Request $request)
    {
        try {


            $category = Category::query()->where('id', $request->category_id)->get()->first();
            if (!$category) {
                return response()->json([
                    'error' => 'Unavailable Category ',
                    'cat' => $request->category_id
                ]);
            }
            $sale_type = SaleType::query()->where('id', $request->sale_type_id)->get()->first();
            if (!$sale_type) {
                return response()->json([
                    'error' => 'Unavailable Sale Type '
                ]);
            }
            $status = "PUBLISHED";
            if($request->toBeConfirmed)
            {
                $status = "DRAFT";
            }

            $FileName = null;
            if ($request->file('file')) {
                $classifiedImg = $request->file('file');
                $Seed =  $this->NewGuid();
                $filename_converted = $Seed;
                $filename_small = $Seed . "-small";
                $filename_medium = $Seed . "-medium";
                $image_small = Image::make($classifiedImg)->encode('webp', 90)->resize(250, 160)->save(public_path('storage/posts/' . $filename_small . '.webp'));
                $image_medium = Image::make($classifiedImg)->encode('webp', 90)->resize(500, 320)->save(public_path('storage/posts/' . $filename_medium . '.webp'));
                $image_converted = Image::make($classifiedImg)->encode('webp', 90)->resize(1000, 640)->save(public_path('storage/posts/' . $filename_converted . '.webp'));

                $FileName = "posts/" . $filename_converted . '.webp';
            }

            $post = Post::create([
                "title" => $request->title,
                "body" => $request->body,
                "author_id" => $request->author_id,
                "price" => (int)$request->price,
                "address" => $request->address,
                "size" => (int)$request->size,
                "year" => (int)$request->year,
                "country" => $request->country,
                "city" => $request->city,
                "status" => $status,
                "category_id" =>  $category->id,
                "sale_type_id" => $sale_type->id,
                "image" => $FileName
            ]);

            if (!$post) {
                return response()->json([
                    'error' => 'Unexpected error while publishing post'
                ]);
            }
            dd($post);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ]);
        }


    }

}
