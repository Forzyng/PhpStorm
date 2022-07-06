<?php

/*use Frz\Class1 as Frz;
use Pv021\Class1 as Pv021;

include_once ("vendor/autoload.php");
//include_once ("autoload.php");

$c1 = new \Frz\Class1();
echo $c1;
echo "<br>";
$c2 = new \Pv021\Class1();
echo $c2

echo "<br>";
echo "<br>";

$c3 = new Frz();
echo $c3;
echo "<br>";
$c4 = new Pv021();
echo $c4;*/

require_once ("./vendor/autoload.php");

/*$c = new App\Class1();
echo $c;*/

$header = new App\Design\Header();
$footer = new App\Design\Footer();

echo $header;

$email = new App\Mail\MailController();
$email->showForm();

echo $footer;