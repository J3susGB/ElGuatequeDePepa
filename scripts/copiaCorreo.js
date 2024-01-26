document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailSpan').addEventListener('click', function() {
        console.log('Clic hecho en emlail');
        copyToClipboard('hola@elguatequedepepa.com');
    });

    function copyToClipboard(text) {
        console.log('Copiar al portapapeles con texto:', text);
        navigator.clipboard.writeText(text)
            .then(function() {
                console.log('Texto copiado correctamente en el portapapeles');
                showCopiedMessage();
            })
            .catch(function(err) {
                console.error('Error copiando el texto: ', err);
            });
    }

    function showCopiedMessage() {
        console.log('Mostrar Mensaje copiado llamado');
        var message = document.createElement("div");
        message.innerHTML = "Correo copiado al portapapeles";
        message.style.position = "fixed";
        message.style.background = "#4CAF50";
        message.style.color = "white";
        message.style.padding = "10px";
        message.style.borderRadius = "5px";
        message.style.top = "10px";
        message.style.right = "10px";
        document.body.appendChild(message);

        setTimeout(function() {
            document.body.removeChild(message);
            console.log('Mensaje eliminado del DOM');
        }, 2000); // El mensaje se eliminará automáticamente después de 2 segundos
    }
});