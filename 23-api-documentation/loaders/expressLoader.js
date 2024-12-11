import express from 'express';
import cors from 'cors';
import notesRoutes from '../routes/notesRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swaggerConfig.js'; // Corrige la ruta aquí

export const initLoaders = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Rutas de la API
  app.use('/notes', notesRoutes);

  // Documentación Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Manejo de errores 404
  app.use((req, res) => res.status(404).json({ error: 'Recurso no encontrado' }));
};