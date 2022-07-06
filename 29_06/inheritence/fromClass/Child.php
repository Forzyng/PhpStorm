<?php

require_once('Base.php');

class Child extends Base
{
    function sayMeow() {
        echo " Meow ";
    }

    public function __toString() {
        return " Child string ";
    }
}