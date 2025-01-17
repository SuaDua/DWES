import { Router } from 'express';
import {
    getPokemonList,
    getPokemonDetails,
    getPokemonTypes,
} from '../controller/apicontroller.js';

const router = Router();

// Rutas
router.get('/pokemon', getPokemonList);
router.get('/pokemon/:nameOrId', getPokemonDetails);
router.get('/types', getPokemonTypes);

export default router;