<?php

class Base
{
    function sayBark() {
        echo "Bark";
    }

    public function __toString() {
        return "Base string";
    }
}