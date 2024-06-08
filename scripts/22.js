// Estructuras de control - if

/**El if es una estructura para tomar decisiones 
 * las condiciones deben de ser verdaderas para que se cumplan
 * 
 * Si la condición es verdadera quiere decir que se ejecutará nuestra parte que está evaluando la condición
 * 
 * sintaxis
 * 
 * palabra reservada if, se colocan parentesis y dentro de estros se evaluará la condición, dentro de las llaves se colocará el código correspondiente, similar a una función
 * 
 * NOTA: en JS el signo = es una igualdad
 * let numero = 0 // un solo igual es una asignación
 * '5' == 5 // esto es una comparación debil y el resultado es true
 * '5' === 5 // esto es una comparación estricta y marcará false porque no son el mismo tipo de datos 
 */
const puntaje = 1000;

if (puntaje == 100) { // 1. se lee: SI puntaje es igual a 1000
    console.log('Si el puntaje es 1000'); // 2. ejecuta este código
}
//else
/**else se usa en conjunto con if, solo que el else se ejecuta cunado la condición dentro del if no es verdadera 
 * sintaxis
 * 
 * if (condición) {
 *  // codigo que se ejecuta cuando la condición se cumple
 * } else {
 *  // código que se ejecuta cunado la condición no se cumple
 * }
*/ 
else {
    console.log('No es igual');
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}

//Else if
/**Else if se usa para evaluar diferentes condiciones, se pueden agregar multiples else if, no es tan recomendable.
 * 
 * sintaxis
 * 
 * if (condición) {
 *  // codigo que se ejecuta cuando la condición se cumple
 * } else if (segunda condicion) {
 *  // codigo que se ejecuta cuando la segunda condición se cumple
 * } else {
 *  // código que se ejecuta cunado ninguna condición se cumple
 * }
 */

// const rol = "ADMINISTRADOR";
const rol = "EDITOR";

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Acceso limitado');
} else {
    console.log('No tienes acceso');
}