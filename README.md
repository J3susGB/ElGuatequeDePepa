# **`PROYECTO EL GUATEQUE DE PEPA`** 

### *Jesús Gómez - Python Data Analyst | Freelancer web Developer⚡*
[![Contact Me](https://img.shields.io/badge/Email-informational?style=for-the-badge&logo=Mail.Ru&logoColor=fff&color=c6362c)](mailto:jgomezbeltran88@gmail.com)
[![LinkedId](https://img.shields.io/badge/LinkedIn-informational?style=for-the-badge&logo=linkedin&logoColor=fff&color=0274b3)](https://www.linkedin.com/in/jesusgb-dev/)
[![Linktree](https://img.shields.io/badge/-Linktree-323330?style=for-the-badge&logo=linktree&logoColor=1de9b6)](https://linktr.ee/jesusgb?utm_source=linktree_admin_share )

### **`Visita el sito:`**

[![El Guateque de Pepa](https://github.com/J3susGB/ElGuatequeDePepa/blob/main/multimedia/images/logo192.jpg)](https://elguatequedepepa.com/)

### **`Información general:`**

#### Se trata del proyecto de una página web que me encargó una empresa de animación de eventos, que montan una cabina hinchable, y dentro un fotomatón/videomatón.



  - *Estructura principal* --> Se trata de una onePage, estructurada en cinco bloques o partes, con una página extra de apoyo donde se registra toda la política de seguridad y el aviso legal de la empresa, a la que se puede acceder a través del botón -más información- del banner emergente de las cookies o pulsando los enlaces habilitados para ellos en el footer de la onePage

  - *Bloque inicial* --> Es la parte que se ve al abrir la web. Está estructurada en el header, en el que podemos encontrar información de contacto de la empresa y acceso a las Redes Sociales de la misma, el logo, y un menú de navegación envuelto en un botón hamburguesa, que por defecto, aparece oculto, y en la parte principal o main, formada por una imagen de fondo y un texto de bienvenida. En ella, podemos encontrar dos botones para contactar con la empresa fácilmente, a través de whatsApp o por correo electrónico. Se hace una descripción de los servicios que la empresa ofrece.
      
  - *Bloque ¿Cómo funciona?* --> Descripción a fondo de los servicios que se ofrecen y como se lleva a cabo el evento. Finaliza con una galería de fotos hecha carrusel, donde aparecen distintas imágenes representativas de eventos que la empresa ha realizado

  - *Bloque ¿Qué incluye?* --> Se explica que es lo que se incluye en el servicio que se contrata, tiempo de duración del servicio, etc.

  - *Bloque Nosotros* --> En esta sección, aparece una imagen de las personas que forman la empresa y una breve descripción de lo que es El Guateque de Pepa.

  - *Bloque Contacto* --> Formulario de contacto para que los usuarios dejen su mensaje, y le llegue a la empresa directamente a su correo electrónico.

  - *Página Política de Privacidad y Aviso Legal* --> Página donde la empresa explica su política de privacidad, que hace con los datos personales recopilados, etc, y el manifiesto legal de todas las leyes y directivas en las que se basa para ejercer dicha recopilación de datos, uso de la web, etc.

### **`Información técnica:`**

#### La página está construida con HTML5, CSS3, PHP y JavaScript. Se trata de una página web responsive, hecha cuidadosamente teniendo en cuenta todas las franjas de tamaño de pantalla. Respetando el diseño, la página se adapta al ancho de la pantalla en la que se visualiza, lo que mejora considerablemente la experiencia visual del usuario. 

#### Paso a explicar las partes que tienen una funcionalidad específica:

  - *Globales* --> De forma general, la web tiene un script que controla la velocidad de desplazamiento al hacer scroll, y dos botones fijados a la parte inferior y derecha de la web, que acompañan al usuario en todo momento al hacer scroll, uno es botón que te lleva directamente al chat con la empresa en la aplicación de whatsApp, al que le he implementado un evento de javascript de tipo click para su uso, y el otro, es una flecha que al pulsarla, te lleva directamente al inicio de la página.

    - Banner de Cookies: Al abrir la página por primera vez, aparece un banner que informa del uso de cookies propias, y dentro, un enlace de más información, que lleva directamente a la página de Política de privacidad y Aviso Legal y un botón para aceptarlas.
    Le implemento un script que controla si el usuario aceptó o no las cookies, y si las aceptó, deja un registro en el caché temporal del navegador del usuario y no se vuelve a mostrar el banner hasta pasadas 3 horas desde que las aceptó. Cuando se abre la página, lo primero que hace el script es leer el caché y buscar el registro, si no le encuentra, muestra el banner al igual que si lo encuentra y han pasado más de tres horas desde que se registró. Por el contrario, si encuentra el registro y han pasado menos de tres horas, no lo muestra. 
    La idea de esto es no perjudicar la experiencia del usuario en caso de que ya lo haya aceptado y esté navegando a la página de privacidad por ejemplo, o si recarga, para que no se esté mostrando el banner todo el tiempo.

    - Archivo robots: Implemento este archivo para controlar el rastreo de los motores de búsqueda en el sitio web.

    - Archivo Sitemap: Implemento este archivo para ayudar a los motores de búsqueda a rastrear e indexar el contenido del sitio web de manera más eficiente.

    - Archivo manifest: Implemento este archivo para para proporcionar información sobre la aplicación web a los navegadores y dispositivos móviles compatibles.


  - *Header* --> Lo divido en dos partes prinpipales, usando grid con CSS: header__top y header__main. 

    - En el header__top encontramos, alineado a la izquierda, un número de teléfono y un email, a los que tengo asociados un script. En el caso del número de teléfono, está pensado sobre todo para pantallas táctiles y dispositivos en los que se pueden emitir llamadas, ya que al pulsarlo, te lleva directamente a la sección del registro de llamadas del dispositivo y te pega ahí el número, para que pueda emitir una llamada sin necesidad de hacer mucho esfuerzo. Con respecto al email, el script lo que hace es que al pulsar el correo, directamente lo copia al portapapeles del dispositivo, con la idea de que si el usuario no tiene configurado un proveedor de correo electrónico en el dispositivo, pueda copiarlo con sólo un click y pegarlo si quiere redactar un correo.
    Alineado a la derecha encontramos un bloque de enlaces, todos alineados horizontalmente usando Flexbox. Estos enlaces son imágenes vectoriales que llevan al usuario a las Redes Sociales de la empresa (Instagram y Facebook), y otro, el de whatsApp, que lleva directamente a la conversación de la aplicación de WhatsApp, y además, con un mensaje autorellenado que dice: "¡Hola! Podríais enviarnos más información sobre los servicios que ofrecéis? Gracias". La idea de esto es que el usuario no tenga que escribir y pueda usar ese mensaje genérico, es decir, hacer click, esperar unos segundos a que se abra la aplicación y pulsar el botón de enviar mensaje.

    - En el header main encontramos el logo de la empresa y un botón hamgurguesa que contiene la barra de navegación. En esta parte, tengo implementados tres script: el primero está asociado al logo, y lo que hace es que cuando el usuario hace scroll hacia abajo, el logo se oculta y también se oculta el espacio que ocupa el mismo. El segundo script está asociado con el primero y lo que hace es aprovechar la ocultación del logo y del espacio que ocupa para desplazar el menú de navegación hacia arriba (si está activo). El tercer script está asociado al menú hamburguesa, y lo que hace simplemente es activar y desactivar el menú de navegación. 
    Los script de ocultacion del logo, espacio del logo y desplazamiento del menú de navegación, a la inversa hace lo contrario, es decir, si el usuario vuelve al principio de la página, el logo vuelve a aparecer y el menú se desplaza a su lugar original.
    Hay que reseñar que tanto el header__top como el menú de navegación están fijos y acompañan al usuario en todo momento cuando hacen scroll. Por defecto, el menú de navegación aparece oculto. En pantallas inferiores a 1000px, los enlaces aparecen en bloque y en pantallas superiores a 1000px aparecen en línea.
    Al pulsar en los enlaces del menú, llevarán al usuario directamente a esa sección de la página.


  - *Carrusel de imágenes* --> Para implementar esta funcionalidad, me apoyo en Bootstrap y utilzo su clase swiper. En pantallas menores de 1000px, para navegar por las      imágenes, siemplemente hay que deslizar el dedo por la pantalla encima de la imagen, hacia la derecha si quiere avanzar a la siguiente y a la izquierda si quiere volver a la anterior. Para pantallas superiores a 1000px, mantengo esta funcionalidad, pero haciendo click, dejando pulsado y moviendo a izquierda y derecha. Además de esta funcionalidad, como me parece un poco complicada, añado dos botones en forma de flecha, uno a la derecha de la imagen y otro a la izquierda, para poder navegar entre imágenes con más facilidad.

  - *Formulario de contacto* --> La parte de backend está desarrollada con php y lo que hace básicamente es recoger los datos introducidos por el usuario en cada campo y enviarlos al correo electrónico de la empresa. Con respecto a las validaciones, de cara al servidor se hacen con php y en la parte de usuario, se hacen con javascript. Las validaciones que implemento son las siguientes:

    - Campo "Nombre": Es obligatorio y si el usuario no lo rellena, no permitirá enviar el formulario y dejará una alerta que dice que tiene que introducir un nombre.

    - Campo "Teléfono": No es obligatorio, pero si se rellena, tiene que tener exáctamente 9 dígitos. Si tiene más o menos, no permitirá enviar el formulario y dejará una alerta que le dice que tiene que introducir un teléfono correcto.

    - Campo "Email": Es obligatorio y si el usuario no lo rellena, no permitirá enviar el formulario y dejará una alerta que dice que tiene que introducir un email. Una vez relleno, se tienen que cumplir varias condiciones:

      - Debe contener un carácter "@".
      - Delante del carácter "@" debe existir mínimo un dígito.
      - Detrás del carácter "@" debe existir un punto.
      - Detrás de este punto, deben existir como mínimo dos caracteres.

    Si no se cumple alguna de estas condiciones, no permitirá enviar el formulario y dejará una alerta que le dice que tiene que introducir un email válido.
    
    - Campo "Mensaje": Es obligatorio y si el usuario no lo rellena, no permitirá enviar el formulario y dejará una alerta que dice que tiene que introducir un mensaje. Además, con javascript le implemento un contador de carácteres y le pongo un máximo de 250 caracteres, y conforme va escribiendo, se muestra abajo a la derecha, los caractéres que lleva escritos y el máximo, con el siguiente formato: 0/250. Una vez que alcanza el número máximo, no permite seguir escribiendo.

    - Campo oculto: Implemento un campo oculto, con la idea de evitar bots. El bot, al ver un campo, tiende a rellenarlo, y con php, implemento la funcionalidad de que si este campo está relleno, no envíe el formulario.

  - *Footer* --> Contiene los mismos enlaces a Redes Sociales de la empresa y además, otro para pulsar y enviar directamente un correo electrónico. También contiene un enlace que lleva a la sección Política de Privacidad y otro que lleva directamente a la sección Aviso Legal.

  - *Página Política de Privacidad y Aviso legal* --> Tiene implementadas las mismas funcionalidades y scripts de la página principal, con la diferencia que el menú de navegación es distinto:

    - Botón inicio: Al pulsarlo, vuelve a la página principal, arriba del todo.
    - Botón Política de Privacidad: Al pulsarlo, lleva directamente a esta sección de la página.
    - Botón Aviso Legal: Al pulsarlo, lleva directamente a esta sección de la página.
    - Botón Contacto: Al pulsarlo, vuelve a la página principal, a la sección del formulario de contacto.

#### Realizo test con la aplicación Lighthouse, y el resultado es el siguiente:

![Test valores Lighthouse](https://github.com/J3susGB/ElGuatequeDePepa/blob/main/infome.jpg)

### *Hecho con ❤️ por Jesús Gómez Freelancer Web Developer⚡*
