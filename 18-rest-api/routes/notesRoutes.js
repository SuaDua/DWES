import { createNote, deleteNote } from '../controllers/notesController.js';

function handleRoutes(option, rl, callback) {
    if (option === '1') {
        rl.question('Nombre de la nueva nota: ', (name) => {
            rl.question('Escribe el contenido de la nota: ', (content) => {
                createNote(name, content, (err, success) => {
                    callback(err || success);
                });
            });
        });
    } else if (option === '2') {
        rl.question('Nombre de la nota a eliminar: ', (name) => {
            deleteNote(name, (err, success) => {
                callback(err || success);
            });
        });
    } else if (option === '3') {
        rl.close();
    } else {
        callback('Opción no válida. Inténtalo de nuevo.');
    }
}

export { handleRoutes };