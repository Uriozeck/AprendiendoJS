// Funciones
/**Las funciones son una serie de procedimientos o instrucciones que realizan una acción ayudan a manetener el código ordenado y más facil de mantener y una ventaja es que son reutilizables 
 * Existen tres formas de declarar una función.
 * 1. Declaración de la función
 * 2. Expresió de la función
 * 3. IIFE
*/

// 1 Declaración de la función
/**Sintaxis 
 * 
 * function nombredeLaFuncion (puedeTenerParametrosONo) {
 *  //codigo...
 *  console.log("hola");
 * }
 * 
 * se manda a llamar la función
 * nombredeLaFuncion(); // si no se llama la función la consola no muestra nada
 */

function sumar() {
    console.log(10 + 10);
}
sumar();

// 2 Expresión de la función
/**La diferencias consiste en que esta función se guarda en una variable
 * Sintaxis
 * 
 * se indica la variable const o let, nombre de la variable, se usa function esta puede tener parametros o no y entre los corchetes se indica el cuerpo de la función
 * 
 * const nombreDeLaVariable = function() {
 *  //codigo...
 *  console.log('Hola);
 * }
 * 
 * Se manda a llamar
 * nombreDeLaVariable();
 */

const sumar2 = function () {
    console.log(15 + 15);
}
sumar2();

// IIFE
/**Son funciones anonimas y se mandan a llamar ellas mismas
 * 
 * sintaxis
 * 
 * (function(){ // la función no contiene un nombre y se coloca dentro de paréntesis
 *  //codigo...
 *  console.log('Hola);
 * })(); Los ultimos parétesis hacen la llamada de la función
 * 
 * Son usadas en jQuery y son usadas para proteger las variables y que no se mezlcen con otro archivo
*/

(function() {
    console.log("Funcion IIFE");
})();


/**Este console log está llamando a una variable de otro archivo (externo.js) y está mostrando en este archivo el contenido de esa variable */
console.log(cliente);


// Hoisting
/** Las funciones al ser creadas deben de ser llamadas tambien
 * Las diferencia entre la declaración de la función y la expresión de la función aparte de la sintaxis es el hoisting
 * 
 * Este hoisting sucede al JS ejecutar dos veces el código, la primera vez se conoce como etapa de creación y la segunda es la etapa de ejecución
 * la declaración de la funcion soporta esto mientras que la expresión de la función no debido a la sintaxis ya que la expresión de la funcion se declara en una variable y la declaración de la función no lo cual 
*/

sumar3(); // Soporta el hoisting
function sumar3() {
    console.log(10 + 10);
}

sumar4(); // No soporta el hoisting
const sumar4 = function () {
    console.log(15 + 15);
}