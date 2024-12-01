import { Router } from 'express';
import { getAllNotes, createNote, deleteNote } from '../controllers/notesController.js';
import { sortNotes } from '../Utils/fileUtils.js';

const router = Router();

router.get('/', (req, res) => {
    const { sort } = req.query; // Ejemplo: /notes?sort=date
    let notes = getAllNotes();

    if (sort) {
        notes = sortNotes(sort, notes);
    }

    res.status(200).json(notes);
});

router.post('/', createNote);
router.delete('/:title', deleteNote);

export default router;