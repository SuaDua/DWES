import fs from 'fs';
import path from 'path';

let notes = []; // Array de notas en memoria

// Simula la función saveNote
const saveNote = (note) => {
    notes.push(note);
};

export const createNote = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Faltan datos.' });
    }
    const note = {
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
        size: content.length,
    };
    saveNote(note);
    res.status(201).json(note);
};

export const listNotes = (req, res) => {
    res.status(200).json(notes);
};

export const deleteNote = (req, res) => {
    const { title } = req.params;
    notes = notes.filter(note => note.title !== title);
    res.status(200).json({ message: `Nota '${title}' eliminada.` });
};

export const importNotes = (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No se subieron archivos.' });
    }

    files.forEach(file => {
        const content = fs.readFileSync(file.path, 'utf-8');
        const note = {
            title: path.basename(file.originalname, '.note'),
            content,
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

    // Crear directorio si no existe
    if (!fs.existsSync('exports')) {
        fs.mkdirSync('exports');
    }

    fs.writeFileSync(filePath, note.content);

    res.download(filePath, `${title}.note`, (err) => {
        if (err) {
            console.error(`Error al descargar el archivo: ${err.message}`);
            res.status(500).json({ error: 'Error al descargar el archivo.' });
        }
        fs.unlinkSync(filePath);
    });
};
