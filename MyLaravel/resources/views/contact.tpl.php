<form class="row g-3"
      action="<?=$_SERVER['PHP_SELF'];?>?controller=ContactController&method=send"
      method="post">

    <?php
    \App\Views\Forms\Input::input(
        "email", "text", "email",
        ["placeholder" => "Введите почту"],
        $varBug['formData']['email']?? null,
        $varBug['err']['email'] ?? null);
    ?>

    <?php
    \App\Views\Forms\Input::input(
        "name", "text", "name",
        ["placeholder" => "Введите имя"],
        $varBug['formData']['name']?? null,
        $varBug['err']['name'] ?? null);
    ?>

    <?php
    \App\Views\Forms\Input::input(
        "name", "text", "name",
        ["placeholder" => "Введите имя"],
        $varBug['formData']['name']?? null,
        $varBug['err']['name'] ?? null);
    ?>


    <div class="col-auto">
        <label for="message" class="visually-hidden">Message</label>
        <textarea name="Message" class="form-control" id="message">
         </textarea>
    </div>
    <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Послать форму</button>
    </div>
</form>
<?php