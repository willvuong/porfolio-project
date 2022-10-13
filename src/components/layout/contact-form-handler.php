<?php 
    $name = $_POST['form-name'];
    $email = $_POST['form-email'];
    $message = $_POST['form-textarea'];

    $email_form = 'willvuong@hotmail.com'

    $email_subject = "Contact For Submission"

    $email_body = 
    "Name: $name. \n".
    "Email: $email. \n".
    "Message: $message. \n"
    

    $to = 'willvuong@hotmail.com'

    $headers = "From: $email_form \r\n"

    $headers .= "Reply-To: $email \r\n"

    mail($to,$email_subject,$email_body,$headers);

    header("Location: Footer.js")


?>