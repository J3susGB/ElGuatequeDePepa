<?php
// Recuperar los datos del formulario
$nombre = $_POST['YourName'];
$telefono = $_POST['Phone'];
$email = $_POST['Email'];
$mensaje = $_POST['Message'];

// Validar los datos (puedes agregar más validaciones si es necesario)
if (empty($nombre) || empty($email) || empty($mensaje)) {
    echo "Error: A fin de poder darte el mejor servicio, necesitamos que rellenes los campos obligatorios.";
    exit;
}

// Configurar el destinatario del correo
$destinatario = 'hola@elguatequedepepa.com';

// Configurar el asunto del correo
$asunto = 'Mensaje desde formulario de contacto';

// Construir el cuerpo del correo
$cuerpoMensaje = "Nombre: $nombre\n";
$cuerpoMensaje .= "Teléfono: $telefono\n";
$cuerpoMensaje .= "Email: $email\n";
$cuerpoMensaje .= "Mensaje: $mensaje\n";

// Enviar el correo electrónico
if (mail($destinatario, $asunto, $cuerpoMensaje)) {
    echo "Gracias por contactar con el Guateque de Pepa. Hemos recibido tu mensaje y nos pondremos en contacto contigo en breve";
} else {
    echo "Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.";
}
?>
