document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('whatsapp-icon').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        var phoneNumber = '604994694';
        var message = encodeURIComponent('¡Hola!\n\nPodríais enviarnos más información sobre los servicios que ofrecéis?\nGracias');
        var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + message;

        window.open(whatsappURL, '_blank');
    });
});
