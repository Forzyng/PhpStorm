<?php

namespace App\Mail;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class MailController
{
    public function showForm()
    {
        if(isset($_GET['doSendForm']))
        {
            $this->sendMail();
        }
        ?>
        <form action="<?=$_SERVER['PHP_SELF'];?>" method="get">
            <input type="email" name="email">
            <input type="submit" name="doSendForm">
        </form>
        <?php
        //echo "Тут форма";
    }

    public function sendMail()
    {
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.ukr.net';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'forzyng@ukr.net';                     //SMTP username
            $mail->Password   = '02E1EnT5Qq36lgTb';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('forzyng@ukr.net', 'Admin');
            $mail->addAddress('forzyng@ukr.net', 'User');     //Add a recipient
          /*  $mail->addAddress('ellen@example.com');               //Name is optional
            $mail->addReplyTo('info@example.com', 'Information');
            $mail->addCC('cc@example.com');
            $mail->addBCC('bcc@example.com');*/

            /*//Attachments
            $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name*/

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Here is the subject';
            $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}