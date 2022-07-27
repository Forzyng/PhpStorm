<?php

namespace App\Database;

class DB
{
    private function __construct()
    {
    }
    private static $instance;
    public static function getInstance()
    {
        if(is_null(DB::$instance)) DB::$instance = new DB;
        return DB::$instance;
    }
}