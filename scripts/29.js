// try catch

/**El uso de try catch es tratar de ejecutar un código con un error
 * en el siguiente caso no esta declarado n2 por lo cual la consola muestra un error y deja de ejecutar el código. 
 * con un try catch ejecutaría todo el código y el códig que tenga errores lo mostrará, la diferencia es que no para todo el código
 * 
 * El uso de try catch es para controlar errores, el caso más usado es cuando un usuario no puede iniciar sesion o si un pago no pasó
 */

const n1 = 20;
const n3 = 20;

console.log(n1);

try {
    console.log(n2);
} catch (error) {
    console.log(error);
}
console.log(n3);