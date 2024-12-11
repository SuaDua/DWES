import { Router } from 'express';
import bcrypt from 'bcrypt';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/usersController.js';

const router = Router();


const validacionToken = async (req, res, next) => {
  const token = req.headers['authorization']; 

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado: No se proporcionó un token' });
  }

  try {
  
    const originalMessage = 'I know your secret';
    const isValid = await bcrypt.compare(originalMessage, token);

    if (!isValid) {
      return res.status(401).json({ error: 'Acceso denegado: Token inválido' });
    }

    next(); 
  } catch (error) {
    res.status(500).json({ error: 'Error interno al validar el token' });
  }
};


router.use(validacionToken);

router.get('/', getAllUsers); 
router.get('/:id', getUserById); 
router.post('/', createUser); 
router.put('/:id', updateUser);
router.delete('/:id', deleteUser); 

export default router;
