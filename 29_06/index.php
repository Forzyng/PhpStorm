<?php
require_once ('FirstClass.php');

$c = new FirstClass();
$a = new FirstClass();
$c -> var = "new Var";
?>

<pre>
    <?php
    print_r($c);
    ?>
</pre>
<pre>
    <?php
    print_r($a);
    ?>
</pre>
