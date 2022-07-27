<?php
function ShowMenu($elements = []) : void {
    if(isset($elements))
    {
        echo "<ul>";
        for ($i = 0; $i < sizeof($elements); $i++) {
            echo "<li> <a href=#>" . $elements[$i] . "</a></li>";
        }
        echo "</ul>";
    }
    else
    {
        echo "No elements";
    }
}