import { generateToken, validateToken } from '../controllers/notesController.js';

const router = Router();

// Rutas protegidas
router.use(validateToken);

router.post('/token', generateToken); // Generar token
router.get('/', getAllUsers); 
router.get('/:id', getUserById); 
router.post('/', createUser); 
router.put('/:id', updateUser);
router.delete('/:id', deleteUser); 

export default router;
