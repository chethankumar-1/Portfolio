<?php
$to = 'kumartrchethan@gmail.com';
$subject = $_POST['subject'];
$message = "Name: " . $_POST['name'] . "\n";
$message .= "Email: " . $_POST['email'] . "\n";
$message .= "Message: " . $_POST['message'] . "\n";
$headers = "From: " . $_POST['email'];

if(mail($to, $subject, $message, $headers)){
    echo "Message sent successfully!";
} else {
    echo "Failed to send message.";
}
?>
