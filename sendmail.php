<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if (isset($_POST['submitContact'])) {
    $name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone_number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                               //Send using SMTP
        $mail->SMTPAuth   = true;                                        //Enable SMTP authentication  
        $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through

        $mail->Username   = 'alphablaise91@gmail.com';              //SMTP username
        $mail->Password   = 'comivghmmmwoqlop';                     //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to

        //Recipients
        $mail->setFrom('alphablaise91@gmail.com', 'Daniel Ukpele');
        $mail->addAddress('alphablaise91@gmail.com', 'Joe User');   //Add a recipient

        //Content
        $mail->isHTML(true);                                        //Set email format to HTML
        $mail->Subject = 'New enquiry - Digital Agriculture Research Lab';
        $mail->Body    = '<h3>Hey there, you got a new enquiry</h3>
                          <h4>Name: ' . $name . '</h4>
                          <h4>Email: ' . $email . '</h4>
                          <h4>Phone Number: ' . $phone . '</h4>
                          <h4>Subject: ' . $subject . '</h4>
                          <h4>Message: ' . $message . '</h4>';

        if ($mail->send()) {
            $_SESSION['status'] = "Thank You for Contacting Us - Team Digital Agriculture Research Lab";
            header("Location: {$_SERVER['HTTP_REFERER']}");
            exit(0);
        } else {
            $_SESSION['status'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            header("Location: index.html");
            exit(0);
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    header("Location: index.html");
    exit(0);
}
