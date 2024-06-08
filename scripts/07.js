// Orden de las operaciones

let resultado;
resultado = 20 + 30 * 2;
console.log(resultado); // 80. Sigue el orden de las operaciones primero multitlicación y después la suma

resultado = (20 + 30) * 2;
console.log(resultado);

//Ejemplo del 20% a una compra
resultado = (100 + 200 + 300) * .2;
console.log(resultado); // 120 es el descuento

//ejemplo de impuestto
resultado = (600 + 600) * 1.16;
console.log(resultado); // 1392 con todo e impuesto

/*INCREMENTOS */

let puntaje = 10;
puntaje++;//incremento en 1
++puntaje; //incrementa en 1
/**Las líneas anteriores son incrementos solo que uno incrementa al tener el valor (puntaje) y despues incrementa(++), el segundo incrementa primero (++) y después muestra el valor (puntaje)
Por ejemplo si queremos mostrar directo en consola el resultado tendriamos:

console.log(puntaje++); // 10 -> ++ al ponerse después no hace el incremento en esta linea
console.log(puntaje); // 11 -> ++ al ponerse antes hace el incremento en esta linea

Sucede lo mismo con puntaje-- hace un decremento en uno
 * 
 * 
*/
// puntaje = +10; //esto no funciona
// puntaje += 10; // Se hace un incremento en decenas
console.log(puntaje);

//El uso del orden de las operaciones es cuando se realizan operaciones matematicas, aritmeticas cuidando el uso de los signos y respetando el orden de estos.
// El uso de los incrementos y decrementos normalmente es en ciclos for o while