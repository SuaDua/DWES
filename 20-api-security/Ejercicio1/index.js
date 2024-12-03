
import express from 'express';
import cors from 'cors';
import notesRoutes from '../routes/notesRoutes.js';
import authRoutes from '../routes/authRoutes.js';
import logger from '../utils/logger.js';

export const initLoaders = (app) => {
    app.use(cors());
    app.use(express.json());

    // Rutas
    app.use('/auth', authRoutes);
    app.use('/notes', notesRoutes);

    // Middleware para manejar errores 404
    app.use((req, res) => res.status(404).json({ error: 'Recurso no encontrado' }));

    logger.info('Loaders inicializados correctamente');
};
