import express from 'express';
import expressLoader from './loaders/expressLoader.js';
import logger from './utils/logger.js';

// Configuración del servidor
const app = express();

// Inicializar middlewares y rutas
expressLoader(app);

// Puerto de escucha
const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => {
  logger.info(`Servidor escuchando en http://localhost:${PORT}`);
});