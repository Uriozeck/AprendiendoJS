// Metodos de propiedad

/**Son funciones que se almacenan en un objeto, estas tendrán la sintaxis de un metodo usando el nombre del objeto punto y la propiedad que sería la función y sus paréntesis*/
const reproductor = {
    // reproducir: function() {
    //     console.log('Reproduciendo canción');
    // }

    // función con parámetro
    reproducir: function(id) {
        console.log(`Se está reproduciendo la canción con ID ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlasylist: function(nombre) {
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlasylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}
//console.log(reproductor);
//reproductor.reproducir();
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlasylist('Pop');
reproductor.reproducirPlasylist('Pop');

// Agregando propiedades (funciones que terminan siendo metodos de propiedad) 
reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción ${id}`);
}
reproductor.borrarCancion(20);