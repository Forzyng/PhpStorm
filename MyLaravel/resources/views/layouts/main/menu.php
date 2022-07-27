
<nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
    <div class="container">
        <a class="navbar-brand"  style="padding: 10px; border-radius: 25px;  border: 3px solid black; text-decoration: none; font-weight:bold;">Triangle</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul class="navbar-nav flex-grow-1">
                <li class="nav-item" style="margin-left: 8px">
                    <a style="font-weight: bold; text-decoration: none; color: black" href="<?=$_SERVER['PHP_SELF'];?>">Main</a>
                </li>
                <li class="nav-item" style="margin-left: 8px">
                    <a style="font-weight: bold; text-decoration: none; color: black" href="<?=$_SERVER['PHP_SELF'];?>?controller=PageController&method=about">About</a>
                </li>
                <li class="nav-item" style="margin-left: 8px">
                    <a style="font-weight: bold; text-decoration: none; color: black" href="<?=$_SERVER['PHP_SELF'];?>?controller=ContactController&method=contact">Contacts</a>
                </li>
                <li class="nav-item" style="margin-left: 8px">
                    <a style="font-weight: bold; text-decoration: none; color: black" href="<?=$_SERVER['PHP_SELF'];?>?controller=AvatarController&method=form">Avatar</a>
                </li>
                <li class="nav-item" style="margin-left: 8px">
                    <a style="font-weight: bold; text-decoration: none; color: black" href="<?=$_SERVER['PHP_SELF'];?>?controller=MailController&method=show">Mail</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<?php
