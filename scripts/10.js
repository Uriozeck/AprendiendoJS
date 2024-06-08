// Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

/**En lugar de hacer lo anterior podría declararse un objeto que contenga los mismos datos:
 * La sintaxis es:
 * 
 * const productos = { 
 * variable1 : "cadena de texto",
 * variable2: 19,
 * }
 */

const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
console.log(producto);

/**Acceder a los atributos de los objetos
 * Para poder acceder a una variable de un objeto se usa la sintaxis de punto (.). su sintaxis es indicar primero el nombre del onjeto el punto y la propiedad o variable de la que se quiere saber su valor. 
 */
console.log(producto.precio); // Se muestra el valor de la propiedad precio
/**Segunda alternativa usando corchtes para acceder a una propiedad del objeto */
console.log(producto["disponible"]);

/**Los productos tienen caracteristicas como:
 * Añadir más propiedades
 * Editar propiedades
 * Eliminar propiedades
 */

producto.imagen = 'imagen.jpg'; //Añadir propiedades
producto.precio = 500; // Editar propiedades
delete producto.imagen; //Eliminar propiedades
console.log(producto);

/**Uso de las caracteristicas es cuando en node.js se le actualizan valores a los objetos */