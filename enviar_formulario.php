<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validación de campo oculto (Honeypot)
    if (!empty($_POST['honeypot'])) {
        // Es probablemente un bot, no proceses el formulario
        header('Location: error.html');
        exit();
    }

    // Validación de campos
    $name = $_POST['YourName'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone'];
    $message = $_POST['Message'];

    // Validación de campos obligatorios
    if (empty($name) || empty($email) || empty($message)) {
        // Campos obligatorios no completados
        header('Location: error.html');
        exit();
    }

    // Validación de correo electrónico
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Correo electrónico no válido
        header('Location: error.html');
        exit();
    }

    list($user, $domain) = explode('@', $email);

    // Verificar que haya al menos un punto después del símbolo "@"
    if (empty($user) || empty($domain) || substr_count($domain, '.') < 1) {
        header('Location: error.html');
        exit();
    }

    list($subdomain, $tld) = explode('.', $domain);

    // Verificar que haya al menos dos letras después del punto
    if (empty($subdomain) || empty($tld) || strlen($tld) < 2) {
        header('Location: error.html');
        exit();
    }

    // Validación de teléfono (si se proporciona)
    if (!empty($phone) && !preg_match("/^[0-9]{9}$/", $phone)) {
        // Teléfono no válido
        header('Location: error.html');
        exit();
    }

    // Validación de mensaje (limitado a 100 palabras)
    $wordCount = str_word_count($message);
    if ($wordCount > 100) {
        // Mensaje demasiado largo
        header('Location: error.html');
        exit();
    }

    // Procesar el formulario y enviar el correo si todas las validaciones son exitosas
    $to = 'hola@elguatequedepepa.com';
    $subject = 'NUEVO FORMULARIO DE EL GUATEQUE DE PEPA';

    $email_message = "Nombre: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= !empty($phone) ? "Telefono: $phone\n" : "Telefono: No proporcionado\n";
    $email_message .= "Mensaje:\n$message";

    mail($to, $subject, $email_message);

    // Redirigir a la página de inicio con un parámetro que indique que se debe mostrar el mensaje de agradecimiento
    header('Location: index.html?thankyou=true');
    exit(); // Asegura que el código se detenga aquí para evitar cualquier salida adicional
}
?>
