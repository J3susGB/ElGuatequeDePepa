<?php
// Recuperar los datos del formulario
$nombre = $_POST['YourName'];
$telefono = $_POST['Phone'];
$email = $_POST['Email'];
$mensaje = $_POST['Message'];

// Validar si es un bot (campo oculto)
if (!empty($_POST['honeypot'])) {
    echo "Error: ¡Oops! Parece que eres un bot. No podemos procesar tu solicitud.";
    exit;
}

// Validar el campo nombre
if (empty($nombre)) {
    echo "Error: El campo nombre es obligatorio.";
    exit;
}

// Validar el campo teléfono
if (!empty($telefono) && !preg_match('/^\d{9}$/', $telefono)) {
    echo "Error: Teléfono no válido. Debe contener exactamente 9 números.";
    exit;
}

// Validar el campo correo
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Error: Email no válido. Introduce un email válido.";
    exit;
}

// Validar el campo mensaje
if (empty($mensaje)) {
    echo "Error: El campo mensaje es obligatorio.";
    exit;
} elseif (strlen($mensaje) > 250) {
    echo "Error: El mensaje no puede exceder los 250 caracteres.";
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
