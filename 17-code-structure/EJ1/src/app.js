import express from 'express';
import { init } from '../loaders/index.js';

const app = express();

// Inicializa todos los loaders
init(app);

export default app;