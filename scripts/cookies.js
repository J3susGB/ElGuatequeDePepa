// window.addEventListener("load", function () {
//     // Verificar si las cookies ya fueron aceptadas
//     var cookiesAceptadas = localStorage.getItem("cookiesAceptadas");

//     if (!cookiesAceptadas) {
//         // Mostrar el banner solo si las cookies no han sido aceptadas
//         document.getElementById('cookie-banner').style.display = 'block';
//     }

//     // Definir la función aceptarCookies
//     window.aceptarCookies = function () {
//         // Ocultar el banner
//         document.getElementById('cookie-banner').style.display = 'none';

//         // Almacenar la aceptación de cookies en el almacenamiento local
//         localStorage.setItem("cookiesAceptadas", true);
//     };
// });

window.addEventListener("load", function () {
    // Obtener la fecha y hora actual
    var fechaActual = new Date();

    // Verificar si las cookies ya fueron aceptadas y obtener la fecha de aceptación
    var cookiesAceptadas = localStorage.getItem("cookiesAceptadas");
    var fechaAceptacion = localStorage.getItem("fechaAceptacionCookies");

    // Verificar si el usuario ha vuelto a la página desde una fuente externa
    var regresoDesdeEnlaceExterno = localStorage.getItem("regresoDesdeEnlaceExterno");

    if (!cookiesAceptadas || (regresoDesdeEnlaceExterno && haPasadoTiempoSuficiente(fechaAceptacion, fechaActual))) {
        // Mostrar el banner solo si las cookies no han sido aceptadas o ha pasado suficiente tiempo desde el último regreso desde un enlace externo
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Limpiar la información sobre el regreso desde un enlace externo
    localStorage.removeItem("regresoDesdeEnlaceExterno");

    // Definir la función aceptarCookies
    window.aceptarCookies = function () {
        // Ocultar el banner
        document.getElementById('cookie-banner').style.display = 'none';

        // Almacenar la aceptación de cookies en el almacenamiento local
        localStorage.setItem("cookiesAceptadas", true);

        // Almacenar la fecha y hora de aceptación
        localStorage.setItem("fechaAceptacionCookies", fechaActual);
    };

    // Función para verificar si ha pasado un tiempo suficiente desde la última aceptación de cookies
    function haPasadoTiempoSuficiente(fechaAceptacion, fechaActual) {
        // Establecer el tiempo en milisegundos (por ejemplo, 3 horas = 3 * 60 * 60 * 1000 milisegundos)
        var tiempoSuficiente = 3 * 60 * 60 * 1000; // Cambiado a 3 horas

        // Verificar si ha pasado el tiempo suficiente
        return (fechaActual - new Date(fechaAceptacion)) > tiempoSuficiente;
    }
    
    // Verificar si la página se cargó desde un enlace externo
    if (document.referrer && document.referrer !== document.location.href) {
        localStorage.setItem("regresoDesdeEnlaceExterno", true);
    }
});


