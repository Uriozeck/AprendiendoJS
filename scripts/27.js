// Programacion orientada a objetos

// Object literal

const producto = {
    nombre: 'Tablet',
    precio: 500
}

// object constructor clase es una forma en la que se almacenan los datos que va a tener un objeto en especifico, una clase va a ser el contenedor de todos los datos, metodos y funciones que va a tener un objeto en el

/**A diferencia del objeto literal el object constructor se inicia como una declración de la función, en este en vez de crear objetos de forma manual se instancian los valores que va a almacenar la clase (función) ya que dentro del objeto hay que crear una función para que esta pueda ser referenciada así misma con this.  */
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    if (disponible < 1) {
        this.disponible = 'No hay stock';
    } else {
        this.disponible = 'Hay stock';
    }
    //esto se compara a console.log(nombre, precio);
} // esta función se considera como una clase

// instancias del objeto usando un constructor
const producto2 = new Producto('Monitor curvo de 49"', 800, 'agotado'); // este constructor le va a mandar la información a la clase
const producto3 = new Producto('Laptop', 300, 'disponible');

console.log(producto2);
console.log(producto3);

// formateando el producto con una función

/**No es muy conveniente porque si se crean nuevo objetos hay que crear funciones por cada objeo realizado */
function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de $${producto.precio}`;
}
console.log(formatearProducto(producto2));

// Prototypes
/**Su funcion es crear funciones que solo se utilizan en un objeto en especifico */
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
}

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

// Cliente

// Se crea la "clase" tiene dos parámetros
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
} 

// Se crea el object constructor con los argumentos de la clase
const cliente1 = new Cliente('Uriel', 'Ramirez');

// se crea el prototipo que obtendrá los valores del object constructor y mostrará el enunciado
Cliente.prototype.formatearCliente = function() {
    return `Bienvenido cliente ${this.nombre} ${this.apellido}`;
}

console.log(cliente1);
console.log(cliente1.formatearCliente());