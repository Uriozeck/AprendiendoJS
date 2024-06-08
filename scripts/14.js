// Arreglos / Arrays

/**Los arreglos son usados para indicar valores, cualquier tipo de valor, ya que dentro de estos se puede agregar cualquier tipo de dato, hay que considerar que al contar los elementos del arreglo el primer elemento se cuenta como el elemento 0 y existen arreglo unidimensionales y multidimensionales*/

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
console.table(numeros); // Muestra e  una tabla el indice y su valor

// Declarar arreglo con un constructor
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
// console.log(meses);
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.log(meses);

// Arreglo con los diferentes tipo de datos
const arreglo = ['Hola', "Hello", 1, true, {nombre: 'Uriel', apellido: 'Rmz'}, [1, 2, 3]]
console.log(arreglo);

//Acceder a los valores de un arreglo
/**Al igual que en los objetos se uede acceder a los valores especificos de un arreglo
 * su sintaxis para acceder es indicar el nombre del arreglo y entre corchetes se indica el indice al que se quiere acceder, el primer indice siempre es 0
 * numeros['Numero del indice que se requiere obtener el valor']
 */
console.log(numeros[4]); // Estoy accediendo al indice 4 y su valor es el 50

/**Uso de los arreglos
 * El uso normal es para conocer la extensión de un arreglo
 */

console.log(meses.length); // nos dice que el arreglo tiene 5 valores

// foreach

/**foreach se usa para iterar los valores de un arreglo 
 * su sintaxis es 
 * indicar el nombre del arreglo seguido de la funcion foearch dentro se coloca una funcion y como parámetro toma el nombre que se le va a dr al valor
 * 
 * arreglo.forEach( function(tomaUnParametro) {
 *  console.log(tomaElVlorDelParametro);
 * })
 */

meses.forEach( function (mes) {
    console.log(mes);
})

//Agregar y eliminar elementos a los arreglos

numeros[5] = 60; // Agrega el 60 en el indice 5, s tiene que indicar especificamente el indice que sigue porque se pueden sobreescribir los valores. No es tan recomendable
console.log(numeros);


/**Metodos de los arreglos */
numeros.push(70); // Agrega un elemento al final del arreglo, se pueden agregar multiples valores

numeros.unshift(-10, 0); // Agrega un elemento al inicio del arreglo, se pueden agregar multiples valores

// meses.pop(); //Elimina el ultimo elemento del arreglo, si requiere eliminar otro elemento necesito volver agregar esta linea
// meses.shift(); //Elimina el primer elemento del arreglo, si requiere eliminar otro elemento necesito volver agregar esta linea
/**Existe un metodo que se llama splice el cual elimina valores indicando las coordenadas
 * Sintaxis
 * se indica el nombre del arreglo .splice() y dentro de los parentesis se indica el indice y el numro de valores a eliminar
 */
meses.splice(2, 1); //del indice 2 elimine 1 valor en adelante 

console.log(numeros);
console.log(meses);

/*Spread operator o Rest operator 
Su uso será para no alterar los datos originales del arreglo */

const nuevoArreglo = [...meses, 'Junio']; // Simula al metodo push, la ventaja es que pueden agregarse multiples valores 
const nuevoArreglo1 = ['Oficuo', ...meses] // Simula al metodo onshif, la ventaja es que pueden agregarse multiples valores 
console.log(nuevoArreglo);
console.log(nuevoArreglo1);