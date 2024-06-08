//  Variables

/* Las variables son espacios disponibles en la memoria de la computadora.
Variables con var, estas ya no son utilizadas actualmente por problemas con el scope. Anteriormente se ocupaban y siguen viendose en código pero ya no es recomendable usar var

var es una palabra reservada, las palabras reservadas no pueden usarse para ombrar variables o funciones porque en el lenguaje tienen una función especifica

DIFERENCIAS ENNTRE DECLARACION E INICIALIZACIÓN DE LA VARIABLE
 La declaración de una variable es cuando se crea la variable y se le da un nombre, mientras que la inicialización de una variable es cuando se le asigna un valor a la variable.
*/

// SINTAXIS DE COMO DECLARAR VARIABLES

// var nombreDeLaVariable = "valor de la variable";

// variables con valor asignado
var producto = 'Audifonos Gamer';
// variables sin valor asignado
var disponible;
// Reasignando el valor de la variable
producto = true; // la variable tenia un valor de tipo string y ahora se le asignó otro valor de tipo booleano
/* JS es un lenguaje de tipo dinamico: No hay que declararle el tipo de dato como en otros lenguajes. Los tipos de datos se indicarán después */
// Declarar multiples variables, esto se hace usando la coma (,)
var producto1 = 'Computadora',
    disponible1 = true,
    categoria = 'Computadora';

/* Reglas de las variables
Las variables pueden contener numeros, caracteres especiales pero no pueden iniciar con esos por ejemplo

var 1producto 
var -disponible */

/*Las variables si pueden iniciar con guión bajo, pueden contener numeros enmedio o al final del nombre de la variable y tambien puede contener algunos caracteres al final */
var _disponible = 1;
var disponible_ = 2;

/*Las variables tienen estitlos para declararse */

var nombre_producto = 'Monitor HD'; // underscore
var nombreProducto = 'Monitor HD'; // CamelCase
var NombreProducto = 'Monitor HD'; // PascalCase
var nombreproducto = 'Monitor HD'; // lower case

/* Las variables tienen algo llamado case sensitive, esto quiere decir que los nombres de las variables y funciones deben de ser igual al momento de llamarse por ejemplo 
var hola = 0;
console.log(Hola) // Se quiere obtener el valor de la variable hola pero o se puede porque no se llaman igual, una comienza con mayúsculas y la otra con minúsculas */