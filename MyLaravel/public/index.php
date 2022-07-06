<?php
require_once ('../vendor/autoload.php');

if(isset($_GET['controller'])) {
    $cName = '\App\Controllers\\' . $_GET['controller'];
    $mName = $_GET['method'];
}else{
    $cName = '\App\Controllers\HomeController';
    $mName = "index";
}

$c = new $cName;
$c->$mName();

/*$c = new \App\Controllers\HomeController();
$c->index();*/