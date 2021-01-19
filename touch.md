## Ese es el primero de una serie de artículos donde veremos y conoceremos una referencia sobre manejo de eventos Touch con JAVASCRIPT.

Con la llegada de HTML5 al mundo del desarrollo web, la forma de crear aplicaciones web ha cambiado de manera muy significativa, ahora bien, JAVASCRIPT no es HTML, pero sí es un elemento de gran importancia para todo lo que significa y se ha logrado con la quinta versión del lenguaje de etiquetas, donde los desarrolladores tienen a mano nuevos elementos. Estos son soportados por nuevas o mejoradas APIS JAVASCRIPT. Aunque no podemos olvidar que la versión tres de CSS ha contribuido en gran medida a una nueva forma versátil y adaptable de visualizar por parte de los usuarios y a crear aplicaciones web por parte de los desarrolladores y diseñadores, con una sutileza semántica.

Todo ha cambiado y JAVASCRIPT lo ha hecho, dando un amplio soporte a dispositivos móviles como smartphones y tablets, además de servir como pilar de nuevos y asombrosos elementos HTML como el CANVAS, donde se construye cualquier cantidad de gráficos a través de JAVASCRIPT, pero en estos momentos lo que nos interesa de las nuevas herramientas del popular lenguaje web del lado del cliente, es el soporte que da al manejo de eventos “Touch”, extendiendo las APIS que tienen como tarea manejar todo lo referente a este tema.

En el presente artículo estudiaremos los diferentes eventos Touch que podemos procesar o manejar con JAVASCRIPT, además de algunos otros aspectos que son de gran importancia para desarrollar aplicaciones que requieran manejos de eventos Touch. Es importante decir que èste es el primero de una serie de artículos, que tienen como fin u objetivo brindar un esquema de orientación donde veremos brevemente algunos usos 


## Tipos de eventos Touch

Los dispositivos táctiles trabajan sin ningún problema en cualquier aplicación web, sus navegadores móviles hacen que los eventos de ratón como el clic, terminen por convertirse en un evento Touch, por eso, al hacer una aplicación web, ésta funciona aunque sea procesando eventos del ratón. Ahora se han agregado a JAVASCRIPT una interesante gama de eventos Touch, que a pesar de ser solo de tres tipos, podemos hacer una combinación de los mismos, y así se obtienen mejores resultados. Estos tipos de eventos son:

- touchstart: Este se genera al hacer cualquier toque a la pantalla, sin importar su duración o movimientos realizados.
- touchend: Este se ejecuta una vez se deja de tocar la pantalla o el objeto que tiene asignado el manejador de eventos.
- touchmove: Este es ejecutado una vez se desliza o desplaza el dedo el usuario, por encima de la pantalla u objeto que está siendo controlado a través del manejador de eventos.

Son tres eventos, los cuales son muy simples de entender, con ellos obtenemos aplicaciones web móviles, que sean más dadas a estos entornos táctiles.


## Herramientas adicionales de los eventos Touch

Hasta ahora ya sabemos que contamos con tres tipos de eventos Touch, éstos, a su vez, tienen una serie de elementos que complementan todo el manejo y procesamientos que se generan tras la interacción de un usuario a través de un dispositivo táctil.

Es importante mencionar que cada evento Touch posee una lista de propiedades en común que vendrían siendo el complemento del que se hablaba anteriormente. Hay tres propiedades que están ligadas de forma directa al Touch, que son:
    - touches: Es una lista de todos toques que se han generado en la pantalla, tiene poca utilidad y suele ser poco usada.
    - targetTouches: Éste guarda una lista de la cantidad del evento que se ha generado en un elemento del DOM.
    - changedTouches: Éste guarda una lista de todos cambios que se producen hasta llegar al evento Touch, por ejemplo, en un touchsend puede haber un touchstart y un touchmove.

Hay otro grupo de propiedades encargado de guardar informacion sobre el evento, las cuales son:
    - identifier: Un número único que identifica de forma única cada toque generado durante una sesión.
    - target: El elemento del DOM en donde se generó el evento.
    - client/ page/ screen: Información de la pantalla, relevante sobre acciones que genera el evento.
    - radius coordinates and rotationAngle: Describe una aproximación de las elipses generadas.


## Procedimiento para asignar un evento Touch
Los eventos Touch de JAVASCRIPT no cambian para nada el esquema que normalmente se usa para crear manejadores en este lenguaje, así que para iniciar, no se está hablando de diferencias a la hora de asignar un manejador de eventos Touch, antes que cambiar los eventos se han extendido, así que ahora podemos asignar a cualquier elemento del DOM uno o varios de los tres eventos mencionados algunos párrafos anteriores de éste artículo.

Para facilitar un poco la explicación, veamos algo de código sencillo, iniciaremos por obtener la referencia a través de métodos del DOM.

var elementoTouch= document.getElementById("areaTactil");

Esto no es nada desconocido para los entendidos de JAVASCRIPT, pero si no sabes a cerca del tema, puedes revisar los manuales de JAVASCRIPT que se encuentran a disposición en Desarrolloweb.com. Lo que viene a continuación es la asignación del manejador del evento, además de algunos datos sobre el elemento, como las coordenadas donde se ha llevado a cabo el toque de pantalla.


//posteriormente asignamos el manejador de eventos lo cual
// se hace de manera convencional.
elementoTouch.addEventListener('touchstart', function(event){
//Comprobamos si hay varios eventos del mismo tipo
if (event.targetTouches.length == 1) { 
var touch = event.targetTouches[0]; 
// con esto solo se procesa UN evento touch
alert(" se ha producido un touchstart en las siguientes cordenas: X " + touch.pageX + " en Y " + touch.pageY);
}

}, false);

En este caso se está manejando un solo evento. En próximos artículos veremos cómo manejar varios eventos, capacidad que solo se puede apreciar en dispositivos multi-Touch.