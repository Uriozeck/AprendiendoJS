// Async / await
/**Su función es ejecutar código de manera asincrona 
 * 
 * Async: La palabra clave async se utiliza para declarar que una función es asincrónica. Esto significa que la función retornará una promesa.
 * 
 * Await: La palabra clave await se utiliza dentro de una función async para esperar la resolución de una promesa. Cuando se encuentra await dentro de una función async, la ejecución de la función se pausa hasta que la promesa se resuelva. Mientras tanto, el control se devuelve al código que llama a la función async.
*/
function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes, espere..');
        
        setTimeout( function() {
            resolve('Los clientes fueron descargados');
        }, 3000)
    });

}


//set timeout
/**Su funcion es ejecutar un código despues de un cierto tiempo */
setTimeout(() => {
    console.log('set timeut');
}, 1000);

//set interval
/**Su funcion es ejecutar un código despues de un cierto intervalo de tiempo al terminar ese intervalo lo vuleve a hacer y así sucesivamente */
// setInterval(() => {
//     console.log('set timeut');
// }, 3000);
descargarNuevosClientes();

async function app() {
    // console.log('App lista');
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
app();

console.log('Este códio no se bloquea');


///

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos, espere..');
        
        setTimeout( function() {
            resolve('Los pedidos fueron descargados');
        }, 5000)
    });

}

async function app() {
    // console.log('App lista');
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        /**Promises.all es una función que obtedrá las funciones creadas con async await y para mostrarlos se debe de hacer referencia a su indice ya que se convierte en arreglo */
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();