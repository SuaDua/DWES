import fs from 'fs';

let notes = [];

export const getAllNotes = () => notes;

export const createNote = (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send('Faltan datos');
    }

    const newNote = {
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
        size: content.length,
    };

    notes.push(newNote);
    res.status(201).json(newNote);
};

export const deleteNote = (req, res) => {
    const { title } = req.params;
    const index = notes.findIndex((note) => note.title === title);

    if (index === -1) {
        return res.status(404).send('Nota no encontrada');
    }

    notes.splice(index, 1);
    res.status(200).send('Nota eliminada');
};
