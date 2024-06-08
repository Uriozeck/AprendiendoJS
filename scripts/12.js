//"use strict"; //Se usa como para indicar un modo estricto al código y para indicar que se usen buenas practicas

const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //freeze se usa para que no se puedan agregar elementos, editar ni eliminar prodpiedades del objeto
producto.imagen = 'imagen.jpg'; //usando el use strict marca un error
console.log(Object.isFrozen(producto)); // isFrozen nos dice si un objeto está sellado y se usa en conjunto con freeze
producto.disponible = false;//freeze no te deja editar
delete producto.precio; //freeeze no permite agregar ni eliminar objetos
console.log(producto);


Object.seal(producto); //seal se usa para que no se puedan agregar elementos al objeto, tampoco permite eliminar pero si editar
producto.imagen = 'imagen.jpg'; //usando el use strict marca un error
console.log(Object.isSealed(producto)); // isSealed nos dice si un objeto está sellado y se usa en conjunto con seal
producto.disponible = false;//seal si te deja editar
delete producto.precio; //seal no te deja eliminar
console.log(producto);