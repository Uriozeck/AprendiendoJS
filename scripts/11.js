// Objetos

const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const precioProducto = producto.precio; // obteniendo el valor del atributo precio del objeto producto en una variable
//const nombreProducto = producto.nombreProducto; // 
console.log(precioProducto);
//console.log(nombreProducto);

//Destructuring objetos
/**Consiste en traer el valor de un objeto e indicar el objeto en una sola linea, funcionando como las lineas de código anteriores
 * 
 * Su sintaxis es usar const o let, llaves y dentro de estas se colocan los atributos del objeto y se indica el signo igual por ultimo se indica el nombre del objeto
 * 
 * const {atributo1, atributo2} = nombreObjeto;
 */

const {precio} = producto; // Indicando una propiedad
const {nombreProducto, disponible} = producto; // Indicando dos propiedades
console.log(precio);
console.log(nombreProducto, disponible);
