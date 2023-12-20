<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['YourName'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone'];
    $message = $_POST['Message'];

    $to = 'hola@elguatequedepepa.com';
    $subject = 'Nuevo formulario de contacto';

    $email_message = "Nombre: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Teléfono: $phone\n";
    $email_message .= "Mensaje:\n$message";

    mail($to, $subject, $email_message);

    // Redirige o realiza otras acciones después de enviar el correo.
    header('Location: gracias.html');
}
?>