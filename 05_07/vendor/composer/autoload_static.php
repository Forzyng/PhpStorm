<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdebf5c928534ce3237c9913574559e4a
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdebf5c928534ce3237c9913574559e4a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdebf5c928534ce3237c9913574559e4a::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitdebf5c928534ce3237c9913574559e4a::$classMap;

        }, null, ClassLoader::class);
    }
}
