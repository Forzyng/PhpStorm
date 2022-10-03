<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\User;

class VerifyEmailController extends Controller
{

    public function __invoke(Request $request): RedirectResponse
    {
        $user = User::find($request->route('id'));

        if ($user->hasVerifiedEmail()) {
            return redirect(env('FRONT_URL') . '/success-operation/3');
        }

        if ($user->markEmailAsVerified()) {
           // event(new Verified($user));
            return redirect(env('FRONT_URL') . '/success-operation/1');
        }

        return redirect(env('FRONT_URL') . '/error404');
    }
}
