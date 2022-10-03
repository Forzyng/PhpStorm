<?php

namespace App\Helpers\Mail;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class To
{
    public static function send($toMail, $toName, $body)
    {
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = \Config\Email::$Host;                     //Set the SMTP server to send through
            $mail->SMTPAuth   = \Config\Email::$SMTPAuth;                                   //Enable SMTP authentication
            $mail->Username   = \Config\Email::$Username;                     //SMTP username
            $mail->Password   = \Config\Email::$Password;                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = \Config\Email::$Port;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom(\Config\Email::$setFromEmail, \Config\Email::$setFromRole);
            $mail->addAddress($toMail, $toName);     //Add a recipient
            /*  $mail->addAddress('ellen@example.com');               //Name is optional
              $mail->addReplyTo('info@example.com', 'Information');
              $mail->addCC('cc@example.com');
              $mail->addBCC('bcc@example.com');*/

            /*//Attachments
            $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name*/

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = "Checker";
            $mail->Body    = $body;
            $mail->AltBody = $body;

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {

            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}