// this

/**Es una palabra reservada hace referencia la objeto sobre el cual se manda a llamar el objeto*/

const reservacion = {
    nombre: 'Uriel',
    apellido: 'Rmz',
    total: '500',
    pagado: 'true',
    informacion: function() {
        console.log(`el cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`);
        // this no soporta un arrow function por su scoope global
        // console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    },
    informacion3: () => {
        console.log(`el cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`);
    },
    informacion2: function() {
        // console.log(`el cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`);
        // this no soporta un arrow function por su scoope global
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    },
    //Arrow function no soprta this su scoope va a los valores globales
    informacion4: () => {
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    },
    informacion5: function(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
// console.log(reservacion.nombre);
// console.log(reservacion.informacion());
// console.log(reservacion.informacion3());
// console.log(reservacion.informacion2());
// console.log(reservacion.informacion4());
// reservacion.informacion();
// reservacion.informacion3();
// reservacion.informacion2();
// reservacion.informacion4();
reservacion.informacion5('Panncho', 'Pedraza');
console.log(reservacion.informacion5('Panncho', 'Pedraza'));