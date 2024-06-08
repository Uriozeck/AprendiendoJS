//Concatenar y Template Strings

const nombre = 'Brayan';
const correo = 'correo@correo.com';

/**Concatenación como se vió el signo de (+) con numeros hacen una suma pero no puedes sumar cadenas de texto, este simbolo lo que hace es concatenar elementos de este tipo de dato: Como se ve en el ejemplo: 
*/
console.log(nombre + correo); // Brayancorreo@correo.com -> Muestra el texto junto
console.log(nombre + ' ' + correo); // Brayan correo@correo.com -> se concatena un espacio
console.log("Nombre de cliente: " + nombre + ' ' + "Correo: " + correo); // Nombre de cliente: Brayan Correo: correo@correo.com -> se concatenan más elementos

/**Concatenando con comas */
console.log("Nombre de cliente:" , nombre , "Correo:" , correo); // Brayan correo@correo.com -> se concatenando con comas, las comas si agregan un espacio al final

/**Concatenando con template strings o strings literals
 * Dentro de los template strings las cadenas de texto ya no necesitan comillas simples ni dobles y para llamar a las variables, funciones o código js se usa la sintaxis: ${} Estos simbolos se colocan con altGr + tecla de llave cerrada (})
 * Otro punto adicional a mencionar es que se pueden usa saltos de linea 
*/
console.log(`Nombre de cliente: ${nombre} 
Correo: ${correo}`);

// Su uso normalmente es cuando se extraen datos desde BD o el usuario ingresa datos desde un prompt