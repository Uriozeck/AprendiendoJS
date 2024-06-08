// Notification API

/**Document hace referencia a todo el documento html
 * para seleccionar elementos de html siempre se tiene que indicar document y enseguida cualquier propiedad
 * 
 * querySelector() dentro de este se coloca el id, clase o etiqueta del documento html y se indica (#) para seleccionar el id, (.) para seleccionar la clase o el nombre de la etiqueta
 * 
 * eventos
 * los eventos son cualquier cosa que haga e usuario con el mouse.
 * para agregar eventos se usa addEventListener(), dentro de este se colocan dos argumentos el nombre del evento (click, hover, etc) y ormalmente se usa una función para mostrar un c´´odigo especifico.
 */
const boton = document.querySelector('#boton');
// console.log(boton);

boton.addEventListener('click', function() { // Primero se debe seleccionar el elemento al cual se le va a agregar un evento y se usa la sintaxis de punto para seleccionar eventos
    // console.log('Diste clic'); //este mensaje se mostrará en la consola al dar clic en el boton seleccionado

    /** 
     * Todas las APIs de JS usan promises y reject y resolve ya lo tienen
     * 
     * notification.permission  Al usar este comando en la consola del navegador visualisamos los permisos si estos se modifican hay que reiniciar el navegador
     * 
     * 
     * */ 

    Notification.requestPermission() // Manda una alerta al dar clic en el boton
    .then( resultado => console.log(` El resultado es: ${resultado}`)) // Podemos ver que no se usa resolve ni reject y tampoco se instancío nada solo se usa .then

    /** se crea este if para tener otra notificación*/
    if (Notification.permission == 'granted') { // si el usuario acepta los permisos se creará una nueva instancia
        new Notification('Esta es una notificación', {
            icon: 'img/ccj.png',
            body: 'Notificacion con una imagen y el usuario nos dio permiso de recibir estas notificaciones'
        }) // se crea una nueva notificacion la cual debe de contener dos valores el primero es un string y el segundo es un objeto
    }
});