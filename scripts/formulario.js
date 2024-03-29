document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        // Validación del campo honeypot
        const honeypot = document.getElementById('honeypot').value.trim();
        if (honeypot !== '') {
            alert('¡Oops! Parece que eres un bot. No podemos procesar tu solicitud.');
            return;
        }

        // Validación del campo nombre
        const nombre = document.getElementById('YourName').value.trim();
        if (nombre === '') {
            alert('El campo nombre es obligatorio.');
            return;
        }

        // Validación del campo teléfono
        const telefono = document.getElementById('Phone').value.trim();
        if (telefono !== '' && !/^\d{9}$/.test(telefono)) {
            alert('Teléfono no válido. Debe contener exactamente 9 números.');
            return;
        }

        // Validación del campo correo
        const email = document.getElementById('Email').value.trim();
        if (!/^.+@.+\..{2,}$/.test(email)) {
            alert('Email no válido. Introduce un email válido.');
            return;
        }

        // Validación del campo mensaje
        const mensaje = document.getElementById('Message').value.trim();
        if (mensaje === '') {
            alert('El campo mensaje es obligatorio.');
            return;
        } else if (mensaje.length > 250) {
            alert('El mensaje no puede exceder los 250 caracteres.');
            return;
        }

        // Envío del formulario
        const formData = new FormData(this);

        fetch(this.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Mostrar mensaje de confirmación o error
            document.getElementById('contactForm').reset(); // Limpiar el formulario si se envió correctamente
            window.location.href = 'index.html#vueltaInicio'; // Redireccionar a la página de inicio
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        });
    });
});
