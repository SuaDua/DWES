import { Router } from 'express';
import { generateToken } from '../controllers/authController.js';

const router = Router();

router.post('/token', generateToken);

export default router;