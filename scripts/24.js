// Iteradores 

/**Los iteradores son repeticiones en el código hasta que una condición se cumpla, minestras la condición siga sin cumplirse el código seguirá ejecutandose
 */

// for
/**Sintaxis
 * 
 * for (let i = 0 //Se declara in indice; i < array.length // se indica cual es la condición; i++ // se haá un oncremento o decremento dependiendo la condición) {
    const element = array[i]; //código que se ejecutará las veces que sean necesarias hasta que la condición termine

    los ciclos usan generalmente números
}
 */

console.log(1);
console.log(2);
console.log(3);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// ejercicio de pares e impares
for (let i = 0; i < 10; i++) {
    if (i %2 === 0 ) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es inpar`);
    }   
}

// recorriendo un arreglo con el cilco for
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

for (let j = 0; j < carrito.length; j++) {
    console.log(j); // muestra cuantos elementos tiene el carrito: 7
    console.log(carrito[j]); // muestra el contenido de los elementos del carrito
    console.log(carrito[j].nombre); // muestra el nombre de cada uno de los elementos del carrito
}

// While
/**Al igual que el ciclo for el while ejecutará código siempre y cuando la condición sea verdadera y hasta que esta se termine entonces continuará el código que se encuentra fuera del ciclo
 * 
 * sintaxis
 * 
 * let i = 0; // Indice
    while (i > 10) { // condición
        // código...
        i++ // incremento
    }
*/

// let h = 0;

// while (h < 10) {
//     console.log(h);
//     h++
// }

// Ejemplo de pares e impares
let h = 0;

while (h < 10) {
    if (h%2 === 0) {
        console.log(`El número ${h} es par`);
    } else {
        console.log(`El número ${h} es inpar`);
    }
    console.log(h);
    h++
}

// Ejemplo de iteración del carrito
let k = 0;

while (k < carrito.length) {
    console.log(k);
    console.log(carrito[k]);
    console.log(carrito[k].nombre);
    k++
}

// Do while
/** Do while también es un ciclo su diferencia con while es que primero se ejecuta el código una vez y después evalúa la condición
 * 
 * sintaxis
 * 
 * let l = 0; // indice
    do {
        console.log(l);
        l++; // incremento
    } while (l < 10); // condición
*/

let l = 0;
do {
    console.log(l);
    l++;
} while (l < 10);