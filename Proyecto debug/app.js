import fs from 'fs';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function mostrarMenu() {
    console.log('\n1. Crear nueva nota');
    console.log('2. Eliminar nota');
    console.log('3. Salir');

    rl.question('Elige una opción: ', (opcion) => {
        ejecutarOpcion(opcion);
    });
}

export function ejecutarOpcion(opcion) {
    if (opcion === '1') crearNota();
    else if (opcion === '2') eliminarNota();
    else if (opcion === '3') rl.close();
    else {
        console.log('Opción no válida. Inténtalo de nuevo.');
        mostrarMenu();
    }
}

function crearNota() {
    rl.question('Nombre de la nueva nota: ', (nombre) => {
        const nombreArchivo = `${nombre}.note`;
        rl.question('Escribe el contenido de la nota: ', (contenido) => {
            fs.writeFile(nombreArchivo, contenido, (err) => {
                if (err) console.log('Error al guardar la nota.');
                else console.log(`Nota "${nombre}" guardada.`);
                mostrarMenu();
            });
        });
    });
}

function eliminarNota() {
    rl.question('Nombre de la nota a eliminar: ', (nombre) => {
        const nombreArchivo = `${nombre}.note`;
        fs.unlink(nombreArchivo, (err) => {
            if (err) console.log('Error: Nota no encontrada.');
            else console.log(`Nota "${nombre}" eliminada.`);
            mostrarMenu();
        });
    });
}


const args = process.argv.slice(2);
if (args.length > 0) {
    ejecutarOpcion(args[0]); 
} else {
    mostrarMenu(); 
}