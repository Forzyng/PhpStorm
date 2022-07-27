<?php

namespace Config;

class Email
{
    public static string $Host = 'smtp.ukr.net';                     //Set the SMTP server to send through
    public static bool $SMTPAuth   = true;                                   //Enable SMTP authentication
    public static string $Username   = 'forzyng@ukr.net';                     //SMTP username
    public static string $Password   = '02E1EnT5Qq36lgTb';             //Enable implicit TLS encryption
    public static int $Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    public static string $setFromEmail = 'forzyng@ukr.net';
    public static string $setFromRole = 'Admin';
}