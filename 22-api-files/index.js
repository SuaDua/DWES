import express from 'express';
import { initLoaders } from './loaders/expressLoader.js';
import logger from './Utils/logger.js';

const app = express();
const PORT = process.env.PORT || 3001;


initLoaders(app);


app.listen(PORT, () => {
  logger.info(`Servidor corriendo en http://localhost:${PORT}`);
});