## Damos los últimos retoques en la triología de artículos dedicada a los eventos Touch de JavaScript. Multi Touch y mucho más.

En dos artículos ya nos hemos dado por enterado de cómo proceder ante el manejo de eventos Touch en aplicaciones Web móvil, un mercado que crece cada día. Por tal razón es que estos dispositivos avanzan de forma acelerada, con un crecimientos abrumador en variedad y avances de herramientas con las que cuentan teléfonos inteligentes y tabletas, que hacen uso de pantallas táctiles para la interacción directa con el usuario. La evolución ha llevado a la concepción de dispositivos multi-Touch, capaces de responder a varios eventos al tiempo, esto ha abierto la puerta a una nueva generación de aplicaciones que están dirigidas a estos sofisticados y avanzados dispositivos, y sólo es posible en tabletas y teléfonos inteligentes de última generación, con sistemas operativos que implementen esta tecnología, pues esta no solo depende del hardware.

Ante este escenario, JavaScript también se preparó para ser capaz de responder a eventos mult-Touch, haciéndolo de una forma muy sencilla, tal como se han venido manejando los eventos Touch en esta serie de artículos, siendo este el tercero, precedido de los artículos "Un vistazo a los nuevos eventos Touch de JavaScript" y "combinando Eventos Touch de JavaScript". En este donde se pretende rematar los apuntes finales dedicados de mi parte a los eventos Touch de JavaScript, veremos cómo hacer objetos arrastrables, haciendo uso de los eventos Touch, además de cómo procesar múltiples eventos Touch, dirigido a dispositivos avanzados, pero si tu terminal no tiene soporte multi-Touch, de igual forma el ejemplo funcionará, solo que con un solo eventos a la vez.


## Haciendo un objeto arrastrable gracias a los eventos Touch

Para engrosar un poco los ejemplos que hemos desarrollado en esta serie de artículos que hemos dedicado al estudio de los eventos Touch a través del lenguaje de la web JavaScript, vamos a crear un ejemplo que, aunque muy simple, nos dará a conocer una forma de hacer un objeto arrastrable. A continuación crearemos un elemento div el cual se podrá mover por la pantalla gracias al deslizamiento que haga el usuario. Para hacerlo posible vamos a usar el evento touchmove, haciendo muy fácil la implementación del ejemplo, pero bueno veamos el código que usamos para lograr eso:

var obj = document.gelElmentById("objArrastrable");
obj.addEventListener('touchmove', function (event) {
    if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0];
        // con esto solo se procesa UN evento touch
        obj.style.left = touch.pageX + 'px';
        obj.style.top = touch.pageY + 'px';
    }
}, false);

Es importante destacar que ese elemento debe tener algunas reglas de estilo CSS, para poder llevar a feliz término el desarrollo del ejemplo en mención. Inicialmente hay que poner la posición en absoluta del objeto, de lo contrario no se moverá por la pantalla, también debe tener en el estilo CSS los atributos que son modificados a través de los métodos del DOM, es decir, haciendo uso de JavaScript. Como se puede apreciar en el ejemplo, por mi parte hice un pequeño estilo con el fin de poder llevar a cabo la ejecución del ejemplo, estilo que comparto con ustedes, aunque no está de más decir que no se hace realmente algo extraordinario.

#objArrastrable{
          border: #000 solid 2px;
          position: absolute;
          width:100px;
          height: 100px;
          top: 450px;
          left: 100px;
       }

Con este simple estilo, lo único que garantizamos es la ejecución del ejemplo y será decisión tuya si quieres agregar algo más para mejorar de forma visual tus ejemplos o proyectos que hagan uso de los eventos Touch de JavaScript.


## Haciendo un canvas dibujable por el usuario de forma multi Touch

Para quienes hayan aprendido programación Java, quizás hayan podio toparse con un ejemplo muy famoso: es un pequeño espacio donde, al hacer un arrastre con el ratón, se iba dibujando un punto. Este ejemplo aparece en un popular libro de programación, donde lo usaban para enseñar el procesamiento de eventos que se pueden generar con el ratón del ordenador. Traemos a colación ese viejo recuerdo, pues ahora haremos algo parecido, pero nosotros no estamos hablando de eventos del ratón de una computadora, sino de eventos Touch de un dispositivo móvil. Tampoco lo programaremos en Java, sino en JavaScript, usando el elemento canvas de HTML5.

El ejemplo realmente no hace nada diferente a lo explicado en esta serie de artículos, dedicados fielmente al manejo de eventos Touch. El único cambio drástico es que será capaz de responder a múltiples eventos a la vez, para lo cual creamos un código como el siguiente:

        canvas.addEventListener('touchmove', function (event) {
            for (var i = 0; i < event.touches.length; i++) {
                var touch = event.touches[i];
                ctx.beginPath();
                ctx.arc(touch.pageX, touch.pageY, 20, 0, 2 * Math.PI, true);
                ctx.fill();
                ctx.stroke();
            }
        }, false);

Como se puede apreciar, procesar múltiples eventos es muy sencillo, sólo hay que hacer un ciclo que itere a través de la lista del objeto touches del evento; de esta forma respondemos a todos los eventos touchmove generados en el canvas. No está de más recordar que el funcionamiento de este ejemplo no está garantizado en todos los dispositivos. Su uso está garantizado en iPad dos, Motorola Xoom, donde se ha probado el funcionamiento de este ejemplo.

También compartimos el código completo del ejemplo, además de la opción de verlos en funcionamiento en una página aparte.
