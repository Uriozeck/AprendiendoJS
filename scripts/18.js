// Funciones con parametros

function sumar() {
    console.log(10 + 10);
}
sumar();

const sumar1 = function () {
    console.log(15 + 15);
}
sumar1();

/**Las funciones anteriores se pueden volver a ocupar usando parámetros */

// Declaración de la función con parametros
function sumar2(n1, n2) { // Se indican los parametros que son similares a declarar una variable
    console.log(n1 + n2); //Los parametros se usan dentro de la función, en este caso eliminaron los valores ya que estos se colocan en la llamada de la función
}
sumar2(10, 10); // Los valores dentro de la llamada de la funcion se llaman argumentos o valores reales y estos contendrán el valor de los parametros haciendo lo mismo que cuando se declara una variable por ejemplo let n1 = 10, n2 = 10;
/**La ventaja al usar parametros y argumentos es que se puede reutilizar la llamada de la función multiples veces con valores diferentes, de esta forma la función es más dinámica, reutilizable y mas inteligente*/
sumar2(20, 20);

// Expresión de la función con parametros
const sumar3 = function (n1, n2) { // Los parametros de esta función son los mismos que la anterior pero no hay conflicto ya que este es un bloque de codigo independiente, ventaja de las funciones!
    console.log(n1 + n2);
}
sumar3(15, 15);

// Parametros por default

function sumar2(n1 = 5, n2 = 5) { // Los parametros van a tener un valor propio
    console.log(n1 + n2); // Espera si se muestram argumentos, en caso que no usa los valores asignados a los parametros
}
sumar2(); // esta llamada no tiene argumentos pero como la función ya tiene parametros con valores por default estos se muestran
sumar2(10, 10); // esta llamada si tiene argumentos, entonces los valores de esta llamada se sobreescriben similar a cuando se reasigna el valor de una variable