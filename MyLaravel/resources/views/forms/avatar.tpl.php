<form
action="<?=$_SERVER['PHP_SELF'];?>?controller=AvatarController&method=form"
method="post" enctype="multipart/form-data">
    <input type="file" name="fileAvatar">
    <input type="submit" value="send">
</form>
<?php
