// Tipos de datos

/**Strings: los strings son cadenas de texto, estas deben ser escrita entre comillas o comillas simples  */
const producto = "Monitor de 20 pulgadas";
const producto2 = String('Monitor de 30 pulgadas'); //Constructor
const producto3 = new String('Monitor de 50 pulgadas'); //Constructor

console.log(producto); //este es un metodo que muestra en consola el resultado de la variable, sirve para depurar código.
console.log(producto2);
console.log(typeof producto3); //typeof sirve para saber el tipo de dato de un valor

/**Escapar comillas, es indiar al navegador que el texto necesita omitir las comillas dentro del string */

const producto4 = 'Monitor de 20"' // Escapando comillas dobles usando comillas simples
const producto5 = "Monitor de 30\""// Escapando comillas dobles usando diagonal invertida
console.log(producto4, producto5);

/**Metodos para los strings */
const caracter = "Estamos aprendiendo los métodos de strings";
//.length: indica cuantos caracteres tiene la cadena de texto, este metodo es solo para los strings
console.log(caracter.length); 
// indexof: revisa si existe un carácter, si existe indica el indice (el indice empieza en 0) en caso contrario muestra un -1
console.log(caracter.indexOf("js"));
// includes: revisa si existe el caracter que buscamos y devuelve true si lo encuentra y false si no la encuentra
console.log(caracter.includes("js"));

// Su uso es simplemente para agregar letras, palabras o frases a eventos, variables y funciones