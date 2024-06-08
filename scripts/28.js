// Clases

/**Las clases en JS reemplazaron los object constructor su sintaxis es similar a un objeto, slo que este no tiene parentesis
 * en su caso dentro de la clase se usa la palabra constructor, esta si contiene parentesis y dentro de estos se colocan los parametros
 */
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }
    obtenerPrecio(){
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor curvo de 49"', 800, 'agotado'); 
const producto3 = new Producto('Laptop', 300, 'disponible');

console.log(producto2);
console.log(producto3);
producto3.obtenerPrecio();
console.log(producto2.formatearProducto());


//Herencia
/**La herencia funciona pasando todos los atributos de una clase a otra, para pasar los atributos a una nueva clase se usa la palabra extends y el nombre de la clase que hereda */
class Libro extends Producto {
    constructor(nombre, precio, isbn) { // En el constructor se siguen indicando todos los parametros de la clase que le está heredando y se colocan los parametros que pertenecen a esta clase
        /**Para heredar los parametros del constructor se usa la palabra super() y dentro se colocan los parametros así sustituyendo:
        // this.nombre = nombre;
        // this.precio = precio;
         */
        super(nombre, precio)
        this.isbn = isbn;
    }
    formatearProducto(){
        // return `El producto ${this.nombre} tiene un precio de $${this.precio} y su ISBN es: ${this.isbn}`;
        /**Para no volver a colocar todo el return de la funcion formatear producto, se realiza lo siguiente: */
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }

    obtenerPrecio(){
        //En caso de usar console.log
        super.obtenerPrecio();
        console.log('Y si hay una existencia');
    }
}
const libro = new Libro('Revolución de JS', 350, 'wded3456');
console.log(libro);
console.log(libro.formatearProducto());
libro.obtenerPrecio();
/**
 * GIT
 * 
 * trabaja con tres estados 
 * modificado
 * preparado
 * confimado
 * 
 * git init nuevo-proyeto - iniciar un proyecto con git
 * --
 * Configuracion del propietario de los proyectos globales
 * 
 * git config --global user.name "nombre"
 * git config --global user.email "correo@correo.com"
 * git config --global core.editor "code" - configurar editor de texto
 * 
 * git config --list - revisar configuración de git
 * para salir de la configuracion oprimir q
 * 
 * saber una configuración en particular 
 * git config user.email - muestra el correo
 * --
 * Configuracion del propietario de los proyectos locales
 * 
 * git config user.name ""
 * git config user.email ""
 * --
 * crear un archivo
 * 
 * touch nombre-del-archivo
 * --
 * Restaurar a una versión previa 
 * 
 * git restore nombre-del-archivo - restaura el archivo especifico
 * git restore . - restaura todo el directorio
 * git restore '*.js' - restaura todos los archivos extensión .js, los cambios realizados se perderán
 * 
 * en caso de no funcionar se usa checkout
 * 
 * git checkout -- nombre-del-archivo - restaura el archivo especifico
 * git checkout . - restaura todo el directorio
 * git checkout -- '*.js' - restaura todos los archivos extensión .js, los cambios realizados se perderán
 * 
 * --
 * Borrar archivo creado
 * 
 * git clean -n - simula el borrado de los archivos que serán afectados
 * git clean -f - borra los archivos creados
 * ---
 * Añadir archivos al area de staging
 * 
 * git add index.html - el archivo creado se agregará al staging
 * git add archivo1.js archivo2.js - añadiendo dos archivos
 * git add --all - añadiendo todos los ficheros modificados
 * git add . - añade todo si estás en la raiz del directorio
 * git add resources/ - todos los archivos modificados de la carpeta resources
 * 
 * git status te indica que usuarios se encuentran modificados o en staging
 * 
 * ---
 * Quitar un archivo del area de staging
 * 
 * git reset nombre-del-archivo 
 * 
 * ---
 * Commits 
 * 
 * git commit -m "Mensaje" - Registrar los cambios que has realizado
 * 
 * 
 */

/**Comandos de windows
 * 
 * cd nombredirectrio - entramos a un directorio
 * cd .. - salimos del directorio
 * 
 * --
 * dir - nos da un listado del contenido del directorio
 * 
 * cls - limpia la consola
 * 
 * --
 * mkdir nombrecarpeta - crea un directorio o carpeta
 * md nombrecarpeta
 * se pueden crea multiples carpetas usando espacio, por ejemplo
 * mkdir carpeta1 carpeta carpeta3 - se crearan las carpetas aneriores
 * 
 * igualmente se pueden crear espacios en los nombres de las carpetas, por ejemplo
 * mkdir "nombre carpeta" - se crea la carpeta nombre carpeta con los esacios indicados
 *
 * -- 
 * Crear carpeta con subcarpetas
 * 
 * mkdir cmd\comandos\beta - crea la carpeta cmd y dentro crea otra carpeta llamada comandos y dentro de esta se crea la carpeta beta
 * 
 * --
 * Renombrar carpeta
 * 
 * ren nombrecarpeta nuevonombrecarpeta
 * 
 * --
 * Eliminar carpetas
 * rd nombrecrpeta - elimina una carpeta
 * 
 * --
 * Crear archivos
 * 
 * copy nombrearchivo.extensión
 * copy nul excel.xlsx - nul inidca que es un archiivo vacio 
 * 
 * Agregar texto a un archivo
 * 
 * copy con nombrearchivo
 * se indica el texto o cntenido, para salir se da la intrucción ctrl + Z 
 * 
 * --
 * Eliminar archivos
 * 
 * del nombrearchivo.extension
 * 
 * --
 * Copiar archivos a una carpeta
 * 
 * copy nombrearchivo.etension nombrecarpeta
 * 
 * --
 * Eliminar archivos dentro de una carpeta
 * 
 * del nombrecarpeta - nos saldrá una advertencia y seleccionamos S o N
 * del nombrecarpeta nombrearchivo.extension
 * 
 * --
 * Eliminar carpeta con su contenido
 * rmdir /s nombrecarpeta - nos saldrá una advertencia y seleccionamos S o N
 * 
 * --
 * Copiar documentos o carpetas de rutas diferentes
 * 
 * xcopy /s "url de la carpeta o archivo" "url de la carpta destino"
 * 
 * --
 * Abrir archivos 
 * noos tenemos que situar primero en la raiz de nuestro equipo y luego entrar a la carpeta windows y la carpeta System32
 * 
 * dir *.exe - nos indicará todos los archivos que tengan esa extensión
 * 
 * para ejecutar un programa se indica su nombre y la extension, por ejemplo
 * word.exe
 * control.exe
 * 
 * 
 * comando de ayuda
 * 
 * dir /?
 * copy /?
 */