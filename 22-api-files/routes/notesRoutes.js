import multer from 'multer';
import { Router } from 'express';
import path from 'path'; 
import { importNotes, exportNote, listNotes } from '../controllers/notesController.js';

const router = Router();


const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        if (path.extname(file.originalname) !== '.note') {
            return cb(new Error('Solo se permiten archivos .note.'));
        }
        cb(null, true);
    },
});


router.post('/import', upload.array('files', 10), importNotes);
router.get('/export/:title', exportNote);
router.get('/', listNotes);

export default router;