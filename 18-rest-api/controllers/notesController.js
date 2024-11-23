import fs from 'fs';

function createNote(noteName, content, callback) {
    const fileName = `${noteName}.note`;
    fs.writeFile(fileName, content, (err) => {
        if (err) return callback('Error al guardar la nota.');
        callback(null, `Nota "${noteName}" guardada.`);
    });
}

function deleteNote(noteName, callback) {
    const fileName = `${noteName}.note`;
    fs.unlink(fileName, (err) => {
        if (err) return callback('Error: Nota no encontrada.');
        callback(null, `Nota "${noteName}" eliminada.`);
    });
}

export { createNote, deleteNote };