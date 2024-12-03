import { Router } from 'express';
import { createNote, deleteNote, getAllNotes } from '../controllers/notesController.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const router = Router();

// Aplicar middleware de validación a todas las rutas
router.use(validateToken);

router.get('/', (req, res) => {
  const { sort } = req.query;
  const notes = getAllNotes(sort);
  res.status(200).json(notes);
});

router.post('/', createNote);
router.delete('/:title', deleteNote);

export default router;