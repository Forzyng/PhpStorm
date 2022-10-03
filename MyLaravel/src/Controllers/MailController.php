<?php

namespace App\Controllers;

use App\Helpers\Mail\To as Sender;

use App\Views\Render;

class MailController
{
    public function show()
    {
        Render::view("mail/form");
    }

    public function validator()
    {
        $err = []; // Массив ошибок

        /**
         * Проверка почты
         */
        if(isset($_POST['email'])) {
            if(strlen($_POST['email']) < 3){
                $err['email']['len'] = "Слишком короткое";
            }
            // ....
        } else {
            $err['email']['var'] = "Почта не передана";
        }

        /**
         * Проверка имени
         */
        if(isset($_POST['name'])) {
            if(strlen($_POST['name']) < 3){
                $err['name']['len'] = "Имя слишком короткое";
            }
            // ....
        } else {
            $err['name']['var'] = "Имя не передали";
        }

        if(isset($_POST['body'])) {
            if(strlen($_POST['body']) < 2){
                $err['body']['len'] = "Body слишком короткое";
            }
            // ....
        } else {
            $err['body']['var'] = "Body не передали";
        }

        // ...

        return $err;
    }

    public function send()
    {
        $varBug['err'] = $this->validator();

        var_dump($varBug['err']);

        /**
         * Если есть ошибки - вывести форму снова
         */
        if(sizeof($varBug['err']) > 0) {
            $varBug['formData'] = $_POST;
            Render::view("mail/form", $varBug);
        }

        $res = Sender::send($_POST['email'],$_POST['name'], $_POST['body']);
        print_r($res);
        // Отсылка формы и вывод результатов

        // var_dump($_POST);

    }
}