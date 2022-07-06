<?php
function MyCalc ($number1, $number2, $symbol) {
    if(is_numeric($number1) && is_numeric($number2)) {
        /*echo match ($symbol) {
            '+' => $number1 . " + " . $number2 . " = " . $number1 + $number2,
            '-' => $number1 . " - " . $number2 . " = " . $number1 - $number2,
            '/' => $number1 . " / " . $number2 . " = " . $number1 / $number2,
            '*' => $number1 . " * " . $number2 . " = " . $number1 * $number2,
            default => $number1 . " " . $symbol . " " . $number2 . " = " ."Unknown Symbol",
        };*/
        switch ($symbol){
            case '+': echo $number1 . " + " . $number2 . " = " . $number1 + $number2; break;
            case '-': echo $number1 . " - " . $number2 . " = " . $number1 - $number2; break;
            case '/': if($number2 != 0)
            {
                echo $number1 . " / " . $number2 . " = " . $number1 / $number2;
            }
            else
            {
                echo $number1 . " / " . $number2 . " = " . "DivideByZero Error";
            }
            break;
            case '*': echo $number1 . " * " . $number2 . " = " . $number1 * $number2; break;
            default: echo $number1 . " " . $symbol . " " . $number2 . " = " ."Unknown Symbol"; break;
        }
    }
}
