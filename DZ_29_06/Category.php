<?php

class Category
{
    public string $name = "";
    public array $list_products = [];

    public function __construct($_name, $_list_products)
    {
        $this->name = $_name;
        $this->list_products[] = $_list_products;
    }

    public function getCategoryName(): string
    {
        return $this->name;
    }

    public function getListProducts(): array
    {
        return $this->list_products;
    }

    public function validator()
    {
        $err = []; // Массив ошибок

        if(isset($_POST['category'])) {
            if(strlen($_POST['category']) < 3){
                $err['category']['len'] = "Имя слишком короткое";
            }
            // ....
        } else {
            $err['category']['var'] = "Имя не передали";
        }

        if(isset($_POST['product'])) {
            if(strlen($_POST['product']) < 3){
                $err['product']['len'] = "Имя слишком короткое";
            }
            // ....
        } else {
            $err['product']['var'] = "Имя не передали";
        }
        // ...

        return $err;
    }

    public function addProducts($_product): void
    {
        $varBug['err'] = $this->validator();

        var_dump($varBug['err']);

        /**
         * Если есть ошибки - вывести форму снова
         */
        if(sizeof($varBug['err']) > 0) {
            $varBug['formData'] = $_POST;
            echo $varBug;
        }
        else
        {
           array_push( $this->list_products, $_product);
        }

    }
}