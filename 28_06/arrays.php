<html>
<body>
<form method="GET" action="<?=$_SERVER['PHP_SELF']?>" >
    <input name="varName" value="varValue">
    <input name="login" value="varValue">
    <input name="password" value="varValue">
    <input type="submit" value="send">
</form>
<footer>
    <pre>
<?php
echo "<p>login: " . $_GET['login'] . "</p>";
print_r($_GET);
print_r($_POST);
// Переменные кукес (в современном мире желательно обходиться без них)
// print_r($_COOKIE);
// Переменные запроса собраны в отдельный массив
// print_r($_REQUEST);
// Состояние сервера
// print_r($_SERVER);
?></pre>
</footer>
</body>
</html>