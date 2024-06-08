// Unir dos objetos

const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


const medidas = {
    peso: '1kg',
    medida: '1m'
}

/**Como buena practica combiene no moificar el objeto de manera manual agregando atributos en el, Una de las manera que juntan dos objetos es un spread operator, el spread operator se usa para unir objetos y arreglos
 * su sintaxis consiste en declarar la variable que va a unir los objetos y entre corchetes agregar tres puntos y el nombre del primer objeto, segudo de coma otros tres puntos y el nombre del siguiente objeto y así sucesivamente
 * const unionDeDosObjetos = { ...objeto1, ...objeto2};
*/

const nuevoProducto = { ...producto, ...medidas};
console.log(producto);
console.log(medidas);
console.log(nuevoProducto);


/**Rest Operator (...):

Uso:Se utiliza para representar un número indefinido de argumentos como un array. Puede utilizarse en funciones para capturar múltiples argumentos en un solo parámetro.

Ejemplo en Funciones:

function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(1, 2, 3, 4)); // Resultado: 10
Ejemplo en Arrays (destructuring):

const [a, b, ...resto] = [1, 2, 3, 4, 5];
console.log(resto); // Resultado: [3, 4, 5]
En resumen, el spread operator se utiliza para expandir elementos, mientras que el rest operator se utiliza para recoger elementos. El spread se usa en el lado derecho de una asignación, mientras que el rest se usa en el lado izquierdo de una asignación (como parámetro de función o en la destructuración). */