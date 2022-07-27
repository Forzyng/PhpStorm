
<form class="row g-3"
      action="<?=$_SERVER['PHP_SELF'];?>"
      method="post">
    <div class="col-auto">
        <label for="number" class="visually-hidden">number</label>
        <input type="text" name="number" class="form-control" id="number">
    </div>
    <div class="col-auto">
        <label for="letter" class="visually-hidden">letter</label>
        <input type="text" name="letter" class="form-control" id="letter">
    </div>
    <div class="col-auto">
        <label for="figure" class="visually-hidden">figure</label>
        <input type="text" name="figure" class="form-control" id="figure">
    </div>
    <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Послать форму</button>
    </div>
</form>
<?php
$varN = 1;
$varL = 'a';
$varF = 'f';

if(isset($_POST['number']) && isset($_POST['letter']) && isset($_POST['figure']))
{
    $varN = $_POST['number'];
    $varL = $_POST['letter'];
    $varF = $_POST['figure'];

    switch ($varL)
    {
        case 'a': $varL = 0;
            break;
        case 'b': $varL = 1;
            break;
        case 'c': $varL = 2;
            break;
        case 'd': $varL = 3;
            break;
        case 'e': $varL = 4;
            break;
        case 'f': $varL = 5;
            break;
        case 'g': $varL = 6;
            break;
        case 'h': $varL = 7;
            break;

    }
    switch ($varN)
    {
        case 1: $varN = 7;
            break;
        case 2: $varN = 6;
            break;
        case 3: $varN = 5;
            break;
        case 4: $varN = 4;
            break;
        case 5: $varN = 3;
            break;
        case 6: $varN = 2;
            break;
        case 7: $varN = 1;
            break;
        case 8: $varN = 0;
            break;

    }
}



echo $varN;
echo $varL;
echo $varF;
echo "<table width='600px' height='600px'>";
for($i=0; $i < 8; $i++){
    echo "<tr>";
    for($j=0; $j < 8; $j++){
        if($i == $varN && $j == $varL)
        {
            if($i % 2 == 0){
                if($j % 2 == 0){
                    echo '<td style="background-color: pink; width: 10px; height:10px; color: black; text-align: center;">' . $varF. '</td>';
                } else {
                    echo '<td style="background-color: black; width: 10px; height:10px; color: white; text-align: center;">' . $varF. '</td>';
                }
            } else {
                if($j % 2 == 0){
                    echo '<td style="background-color: black; width: 10px; height:10px;  color: white; text-align: center;">' . $varF. '</td>';
                } else {
                    echo '<td style="background-color: pink; width: 10px; height:10px;  color: black; text-align: center;">'. $varF. '</td>';
                }
            }
        }
        else
        {
            if($i % 2 == 0){
                if($j % 2 == 0){
                    echo '<td style="background-color: pink; width: 10px; height:10px"></td>';
                } else {
                    echo '<td style="background-color: black; width: 10px; height:10px"></td>';
                }
            } else {
                if($j % 2 == 0){
                    echo '<td style="background-color: black; width: 10px; height:10px"></td>';
                } else {
                    echo '<td style="background-color: pink; width: 10px; height:10px"></td>';
                }
            }
        }


    }
    echo "</tr>";
}
echo "<table>";