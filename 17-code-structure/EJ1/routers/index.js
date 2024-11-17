import { Router } from 'express';
import pingRoute from './ping.js';

const router = Router();

router.use('/', pingRoute); 

export default router;