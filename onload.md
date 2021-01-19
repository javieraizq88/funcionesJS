El evento onload de Javascript se activa cuando se termina de cargar la página. Se ha de colocar en la etiqueta <body>, aunque en versiones modernas de Javascript, también lo aceptan otros elementos como las imágenes.

Con el evento onload podemos ejecutar acciones justo cuando se han terminado de cargar todos los elementos de la página. Es un evento bastante utilizado pues es muy habitual que se deseen llevar a cabo acciones en ese preciso instante. En nuestro ejemplo vamos a ver cómo podríamos hacer un script para motivar a nuestros visitantes a que nos voten en un ranking cualquiera de páginas web.

La idea es que la página se cargue entera y, una vez esté cargada, aparezca una ventana de Javascript donde se proponga al visitante votar a la página. Es interesante esperar a que termine de cargar la página entera para que el visitante pueda ver la web que se propone votar, antes de que realmente le pidamos su voto.

Nos fijamos que en la etiqueta <body> tenemos el evento onload="pedirVoto()". Es decir, que cuando se cargue la página se llamará a una función llamada pedirVoto(), que hemos definido en el bloque de script que tenemos en la cabecera.

La función pedirVoto() utiliza una caja confirm para saber si realmente el usuario desea votarnos. La función confirm() muestra una caja con un texto y dos botones, para aceptar o cancelar. El texto es lo que se recibe por parámetro. Dependiendo de lo que se pulse en los botones, la función confirm() devolverá un true, si se apretó el botón aceptar, o un false, en caso de que se pulsase sobre cancelar.

La función confirm() está a su vez metida dentro de un bloque condicional if, de modo que, dependiendo de lo que se pulsó en la caja confirm, el if se evaluará como positivo o negativo. En este caso sólo se realizan acciones si se pulsó sobre aceptar.

Para acceder a la página donde se contabiliza nuestro voto tenemos el método window.open(), que sirve para abrir ventanas secundarias o popups. Mostramos la página donde se vota en una ventana secundaria para que el visitante no se marche de nuestra web, ya que acaba de entrar y no deseamos que se vaya ya.

Con esto queda más o menos ilustrado cómo hacer uso del evento onload. Seguro que en vuestras creaciones habrá muchos más casos donde utilizarlo.

