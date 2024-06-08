// Arrow functions

// Normalmente se usan con la sintaxis de expresión de la función
const sumar = function (n1, n2) {
    console.log(n1 + n2);
}
sumar(5, 10);

/**Sintaxis de arrow function 
 * 
 * Se usa como ejemplo la función anterior, su forma de escribirse consiste en quitar la palabra function, esta será sustituida por una flecha => y las llaves pueden mantenerse o también se pueden eliminar dejando todo en una sola linea, se muestra acontinuación:
 * 
 * Estructura 
 * 
 * const arrowFunction = (parametros) => { //codigo }
 * 
 * NOTA: cuando la función tiene un parametro este puede ir sin parentesis, cuando la función tienen dos o más parametros, estos deben ir en su parentesis
*/

// Arrow function con llaves
const sumar1 = (n1, n2) => { 
    console.log(n1 + n2) 
};
sumar1(5, 10);

// Arrow function sin llaves
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

//Arrow function con un solo parametro, el parametro se encuentra sin parentesis
const aprendidendo = tecnologia => console.log(`Aprendiendo: ${tecnologia}`);
aprendidendo('JavaScript');


// Los arrow functions son muy utilizados en los array methods
/**El siguiente código es tomado del archivo 15.js. En este ejemplo los metodos se convertiran en arrow functions */
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

// foreach convertido a arrow function
meses.forEach( mes => {
    console.log(mes);
    if (mes == 'Marzo') {
        console.log('Marzo si existe en el arreglo');
    }
});

// Array methods con arrow functions
/**Las funciones cunado se convierten a arrow functions y retornan un valor el return ya no es necesario */
let resultado;
resultado = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

resultado = carrito.filter( producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter( producto => producto.nombre !== 'Monitor 20 pulgadas');
console.log(resultado);