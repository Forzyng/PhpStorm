<?php
spl_autoload_register(function ($class_name) {
    echo "Searching class: " . $class_name . "\n";
    include ("lib/" . $class_name . '.php');
});