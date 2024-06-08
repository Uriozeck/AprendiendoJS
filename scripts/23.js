// estructura de control switch

/**Switch es una estructura de control que evalúa multiples condiciones 
 * 
 * sintaxis
 * 
 * switch (condición) {
    case 'condicion1':
        console.log('códig de la condición cuando esta se cumple');
        break; //Aquí termina le ejecución del código
    default: // condicion por default, funciona como else
    //código cuando no se cumplen las condiciones
        break; // Aquí termina le ejecución del código
}
 */
const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Su metodo de pago es con tarjeta');
        break;
    case 'Chaque':
        console.log('Su metodo de pago es con chque, Revisaremos los fondos');
        break;
    case 'Efectivo':
        console.log('Su metodo de pago es con Efectivo, revisaremos si sora cambio');
    default:
        console.log('Aún no ha pagado');
        break;
}