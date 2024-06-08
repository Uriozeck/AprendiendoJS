// Arreglos 2

/**Arreglo unidimensional */
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.log(meses);

/**Arreglo d objetos */
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

meses.forEach( function(mes) {
    console.log(mes);
    if (mes == 'Marzo') {
        console.log('Marzo si existe en el arreglo');
    }
});

// Array methods

/**Includes */
let resultado = meses.includes('Marzo'); // includes solo funciona si el arreglo es unidimensional
console.log(resultado); //Siempre debe de existir una variable para que console log muestre un resultado

const resultado1 = carrito.includes('Tablet'); // includes n funciona con arreglos de diferentes dimensiones
console.log(resultado1);

//Some
/**Some se usa para arreglo multidimensional o de objetos su función es similar a includes pero la sintaxis es más complicada
 * sintaxis
 * en una variable se indica el nombre del arreglo .some() dentro de sus paréntesis se coloca una función con un parámetro. Posteriormente se indica un return para regresar el valor del parámetro indicando en este el parametro la sintaxis de punto para acceder a la propiedad del objeto y por ultimo se compara el valor de la propiedad
 * 
 * let variable = nombreArreglo.some(función (parámetro) {
 *  return parámetro.propiedadDelArreglo === 'Valor de la propiedad';
 * })
*/
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
});
console.log(resultado);

/**Viztazo a los Arrow functions */
resultado = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado);

// Reduce
/**Tomará los valores de las propiedades y mostrará un resultado 
 * sintaxis
 * 
 * en una variable se indica el nombre del arreglo .reduce() dentro de sus paréntesis se coloca una función con dos parámetros, el total y el nombre de la propiedad + .valor . Posteriormente se indica un return para regresar el valor de los parámetros. después de los corchetes antes de terminar el metodo reduce se indica el indice desde donde se tomará la suma
 * 
 * let variable = nombreArreglo.reduce(función (parámetroDelTotal, parametro2) {
 *  return parámetroDelTotal + parametro2;
 * }, 0); // El 0 indica que la suma comenzará en el indice 0
*/

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);
console.log(resultado);

//Arrow function

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// filter
/**Se usa para filtrar lo que se necesite 
 * sintaxis
 * 
 * en una variable se indica el nombre del arreglo .filter() dentro de sus paréntesis se coloca una función con dos parámetros, el total y el nombre de la propiedad + .valor . Posteriormente se indica un return para regresar el valor de los parámetros. después de los corchetes antes de terminar el metodo reduce se indica el indice desde donde se tomará la suma
*/

resultado = carrito.filter( function(producto) {
    return producto.precio > 400;
})
console.log(resultado);

resultado = carrito.filter( function(producto) {
    return producto.nombre !== 'Monitor 20 pulgadas';
})
console.log(resultado);