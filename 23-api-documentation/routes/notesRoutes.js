import { Router } from 'express';
import { createNote, deleteNote, listNotes, importNotes, exportNote } from '../controllers/notesController.js';

const router = Router();

router.get('/', listNotes);
router.post('/', createNote);
router.delete('/:title', deleteNote);
router.post('/import', importNotes);
router.get('/export/:title', exportNote);

export default router;