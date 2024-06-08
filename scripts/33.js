// Fetch api

/**Es el reemplazo de Ajax (XMLHttpRequest) 
 * 
 * Al igual que Ajax te permite enviar información al servidor u obtener informacion de un servidor.
 * Se puede obtener un archivo local o una respuesta de un servidor (texto o JSON)
 * Igual que todas las Apis modernas de JS utiliza promises o tambien async / await
 * 
 * Que es JSON
 * 
 * Significa JavaScript Object Notation los lengajes de backend pueden transformar las respuestas en un archivo JSON
 * 
 * Es un lenguaje de transporte de datos
 * Un JSON puede ser creado en cualquier lenguaje y se puede onsumir en JS por medio de Fetch ApI y mostrarlo en tu sitio web
 * 
 * 
*/

/**Ejemplo de fetch API
 * 
 * En un archivo que se creó llamado empleados.json se simulan datos extraidos de una base de datos en formato json
 * 
 * se está creando una función que va a obtener los datos de este archivo
 * 
 * fetch obtiene la url del archivo que contiene los datos pero antes lo guardamos en una variable y fetch api utiliza promises, hay que recordar que las apis no usan resolve ni reject, solo usan .then o .catch y es recomendable usarlos como arrow functions
 * 
 * dentro de .then() colocamos el resultado ya sea con u return o console.log y llamamos a la función para que nos muestre el contenido
 */

// usando fetch con promises
/*function obtenerEmpleados() {
    const archivoDeConsulta = 'scripts/empleados.json'
    
    
    fetch(archivoDeConsulta)
    .then(resultado => {
        console.log(resultado); // nos muestra un response pero no los datos, si nos muestra un estado 200 significa que la petición es correcta, si nos muestra un estado 400 quiere decir que hay algo mal en la llamada al archivo
        return resultado.json(); // el console.log annterior nos funcionó para saber el estatus de la llamada al archivo y return lo usamos para decir que el resultado será un archivo json o un texto etc, estos se llaman como un metodo, por ejemplo resultado.json().
    })
    .then( datos => {
        console.log(datos); // Cuando se retorna el then se tiene que agregar otro.then para mostrar los datos
        console.log(datos.empleados); //mostramos los datos directamente sin mostrar el nombre del objeto

        //Aplicando destructuring
        const { empleados } = datos;
        console.log(empleados);

        //Iterando sobre el arreglo paa mostrar los elementos de forma individual
        empleados.forEach( empleado => {
            console.log(empleado);
            console.log(empleado.id);
            console.log(empleado.nombre);
            console.log(empleado.puesto);

            // Mostrar los datos en el HTML
            document.querySelector('.contenido').textContent += empleado.nombre;
        });
    })
}*/

// usando fetch con async await

async function obtenerEmpleados() {
    const archivoDeConsulta = 'scripts/empleados.json'; // se declara una variable para obtener la url del archivo.json
    const resultado = await fetch(archivoDeConsulta); // nos muestra un response pero no los datos, si nos muestra un estado 200 significa que la petición es correcta, si nos muestra un estado 400 quiere decir que hay algo mal en la llamada al archivo y en fetch se coloca la url en este caso la variable
    const datos = await resultado.json(); // se ocupa la variable datos para obtener el archivo e indicar si es un json txt etc

    console.log(resultado); // nos muestra el estatus de la consulta
    console.log(datos); // se muestran los datos

    //Aplicando destructuring
    const { empleados } = datos;
    console.log(empleados);

    //Iterando sobre el arreglo paa mostrar los elementos de forma individual
    empleados.forEach( empleado => {
        console.log(empleado);
        console.log(empleado.id);
        console.log(empleado.nombre);
        console.log(empleado.puesto);

        // Mostrar los datos en el HTML
        document.querySelector('.contenido').textContent += empleado.nombre;
    });

}
obtenerEmpleados();