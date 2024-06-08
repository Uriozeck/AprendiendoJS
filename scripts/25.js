// Foreach y Map

/**Foreach y map son metodos exclusivos de arreglos */
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 20 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// foreach
/**Itera en el arreglo el numero de elementos que tenga un arreglo, si el arreglo tiene 5 indices esas son las veces que foreach se ejecuta */

carrito.forEach(function (producto) {
    console.log('una vez por cada elemento'); // muestra este texto cada vez que itera sobre un indice
    console.log(producto); // El parametro producto es como si fuera una variable que almacena al carrito e itera sobre cada indice mostrando la información de cada uno
    console.log(carrito); // Muestra los elementos del carrito, no hace iteración
    console.log(producto.nombre); // producto.nombre es lo mismo que carrito.nombre recordando lo que hace el parametro producto dicho anteriormente
});

// foreach con arrow function
carrito.forEach( producto => console.log(producto.nombre));

// map

/* La sintaxis de map es igual que foreach
la diferencia es que map se usa para crear nuevos arreglos ya que foreach solo es usado para imprimir en consola
*/
carrito.map(function (producto) {
    console.log('una vez por cada elemento'); // muestra este texto cada vez que itera sobre un indice
    console.log(producto); // El parametro producto es como si fuera una variable que almacena al carrito e itera sobre cada indice mostrando la información de cada uno
    console.log(carrito); // Muestra los elementos del carrito, no hace iteración
    console.log(producto.nombre); // producto.nombre es lo mismo que carrito.nombre recordando lo que hace el parametro producto dicho anteriormente
});

// map con arrow function
carrito.map( producto => console.log(producto.nombre));

// foreach y map asignado a una variable
/** Se da por implicito el return  */
const arreglo1 = carrito.forEach( producto => producto.nombre); // foreach no mostrará undefined solo funciona si ser de esta forma
/** carrito.forEach( producto => console.log(producto.nombre)); // solo funciona así para mostrar resultado en consola*/
const arreglo2 = carrito.map( producto => producto.nombre);
const arreglo3 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);