import fs from 'fs';
import path from 'path';

let notes = []; 

const saveNote = (note) => {
    notes.push(note);
};

export const getAllNotes = () => notes;

export const importNotes = (req, res) => {
    const files = req.files;

    if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No se subieron archivos.' });
    }

    files.forEach(file => {
        const content = fs.readFileSync(file.path, 'utf-8');
        const note = {
            title: path.basename(file.originalname, '.note'),
            content: content,
            createdAt: new Date(),
            updatedAt: new Date(),
            size: content.length,
        };

        saveNote(note);
        fs.unlinkSync(file.path); 
    });

    res.status(200).json({ message: 'Archivos importados exitosamente.' });
};

export const exportNote = (req, res) => {
    const { title } = req.params;
    const note = notes.find(n => n.title === title);

    if (!note) {
        return res.status(404).json({ error: 'Nota no encontrada.' });
    }

    const filePath = path.join('exports', `${title}.note`);

    // Crear el directorio de exportación si no existe
    if (!fs.existsSync('exports')) {
        fs.mkdirSync('exports');
    }

    // Escribir el archivo de la nota en el directorio de exportación
    fs.writeFileSync(filePath, note.content);

    res.download(filePath, `${title}.note`, (err) => {
        if (err) {
            console.error(`Error al descargar el archivo: ${err.message}`);
            res.status(500).json({ error: 'Error al descargar el archivo.' });
        }
        fs.unlinkSync(filePath); // Eliminar archivo temporal después de la descarga
    });
};

export const listNotes = (req, res) => {
    const { sort, filter } = req.query;
    let filteredNotes = notes;

    if (filter) {
        filteredNotes = filteredNotes.filter(note => note.title.includes(filter));
    }

    if (sort) {
        filteredNotes = sortNotes(sort, filteredNotes);
    }

    res.status(200).json(filteredNotes);
};

const sortNotes = (sortBy, notes) => {
    switch (sortBy) {
        case 'date':
            return notes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        case 'title':
            return notes.sort((a, b) => a.title.localeCompare(b.title));
        case 'size':
            return notes.sort((a, b) => b.size - a.size);
        default:
            return notes;
    }
};