<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }



    /**
     * Login
     */
    public function login(Request $request){
        /*$request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $remember_me = $request->has('remember_me');
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        //$token = Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')], $remember_me);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }


        $user = Auth::user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ],
            'remember' => $remember_me
        ]);*/
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        $credentials = $request->only('email', 'password');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
     /*
        }*/

        if ($token = JWTAuth::attempt($credentials)) {
            if(auth()->user()->hasVerifiedEmail())
            {
                return response()->json([
                    'status' => 'success',
                    'user' => auth()->user(),
                    'authorisation' => [
                        'token' => $token,    //$this->createNewToken($token)
                        'type' => 'bearer',
                    ]
                ]);
            }else{
                return response()->json(['error' => 'You need to confirm your email'], 401);
            }

        }

            return response()->json(['error' => 'Uncorrect data'], 401);

    }



    /**
     * Register a User.
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,25',
            'login' => 'required|string|between:2,25|unique:users',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));
        if($user)
        {
            event(new Registered($user));
        }
        $credentials = $request->only('email', 'password');
        if ($token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        }
        else{
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully',
                'user' => $user
            ]);
        }

    }


    /**
     * Log the user out (Invalidate the token).
     */
    public function logout(Request $request)
    {
        /*$user = Auth::user()->token();
        $user->revoke();*/
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

 /*   public function email_verify(Request $request)
    {
        $request->validate([
            'user_id' => 'required|int',
            'hash' => 'required',
        ]);

        $userId = $request->input("user_id");
        $hash = $request->input("hash");

        $user = Auth::user();

    }*/




    /**
     * Refresh a token.
     */
    public function refresh() {
        // return $this->createNewToken(auth()->refresh());
        return $this->createNewToken(auth('api')->refresh());
    }





    /**
     * Get the authenticated User.
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }




    /**
     * Get the token array structure.
     */
    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }


}
