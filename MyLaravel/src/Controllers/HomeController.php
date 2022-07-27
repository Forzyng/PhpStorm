<?php

namespace App\Controllers;

use App\Views\Render;

class HomeController
{
    public function index() {
       /* echo "Work";*/
       /* $varBug['names'] = [
            "Artem", "Andrei", "Billy"
        ];
        $varBug['header']['pageName'] = "Main Page";*/
        Render::view("home");
    }

}