<header><?=Config\App::$headerTitle?></header>
<?php
if(isset($varBug['header']['pageName'])){
    echo "<h2>" . $varBug['header']['pageName'] . "</h2>";
}
?>
<?php
require_once ($layoutDir . "/menu.php");
