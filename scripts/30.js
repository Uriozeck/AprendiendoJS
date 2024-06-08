// promises

/**Las promesas son como en la vida real se puede prometer algo pero no sabeomos si se cumplirá, no se cumplirá o se olvidará
 * 
 * 
 */
const usuarioAutenticado = new Promise( function(resolve, reject) { // En este caso estamos usando un constructor y en la función dentro de la promesa estamos agregando dos parametros resolve y reject, estos parametros siempre se usan con un promise.
    const auth = true;
    if (auth) {
        resolve('Usuario autenticado'); // resolve es una función que se usa cuando la promesa se cumple
    } else {
        reject('Usuario no autenticado'); // reject es una funcion que se usa cuando la promesa no se cumple
    }
});
console.log(usuarioAutenticado); 
/**Los promises cuentan con los tres estados mencionados 
 * 1. Pending: no se ha cumplido la promesa pero tampoco se ha rechzado
 * 2. fullfilled: la promesa ya se cumplió
 * 3. reject: la promesa no se cumplió
 * 
 * Cuando en consola sale cualquiera de estos tres estados quire decir que aun falta completar código en la promesa
 * 
 * Normalmente las promesas son usadas para consultar una api 
 */

// Saliendo de cualquiera de los tres estados de la promesa 

usuarioAutenticado
.then( function (resultado) { // s le agrega un parametro que se vincula con el resolve
    // console.log('Desde el promise'); // Imprimiendo para salir del estado fullfiled
    console.log(resultado); // imprime el console.log dentro de resolve

}) //Acediendo al valor resolve de la promesa con .then() este then normalmente usa una función dentro
.catch( function(error) {
    console.log(error); // imprime el console.log dentro de reject
}); //Acediendo al valor reject de la promesa con .catch() este catch normalmente usa una función dentro


// Promise con arrow function

const usuarioAutenticado1 = new Promise( (resolve, reject) => {
    const auth = false;
    if (auth) {
        resolve('Usuario autenticado');
    } else {
        reject('Usuario no autenticado');
    }
});
console.log(usuarioAutenticado1); 

usuarioAutenticado1
.then( (resultado) => console.log(resultado))
.catch( (error) => console.log(error));