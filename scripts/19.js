// Funciones que retornan valores

/**Estas funciones en el cuerpo finalizan con un return, el retunr debe de ir al final del cuerpo de la función, si se coloca antes el procedimiento para hasta donde se lee return
 * 
 * Las funciones que tienen return al ser llamadas deben colocarse en una variable o constante
 */

function sumar (n1, n2) {
    return n1 + n2;
}

const rsultado = sumar(2, 3);
console.log(rsultado);

// Ejemplo de carrito
let total = 0; //variable que va a ir incrementando

function agregarCarrito(precio) { // función de carrito, su parametro es el precio y este tendrá un argumento el cual será un numero simulando el costo de un producto
    return total += precio; // se retorna el total + el precio
}

function calcularImpuesto(total) { // funcion para calcular el impuesto su parámetro es la variable total que tendra el valor de la variable precio
    return 1.15 * total; // se retorna el total * el impuesto
}

total = agregarCarrito(200); // total guardará el valor de la variable precio y este incrementará dentro de la función conforme se agreguen más productos 
total = agregarCarrito(300);

const totalAPagar = calcularImpuesto(total);
console.log(total);
console.log(`El total a pagar con impuesto es: $${totalAPagar}`);