import express from 'express';
import logger from './logger.js';
import { validarAccesoAdmin } from './middleware.js'; 

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.on('finish', () => {
    const { method, originalUrl } = req;
    const { statusCode } = res;

    let message = `${method} ${originalUrl} - Código de estado: ${statusCode}`;

    if (statusCode >= 200 && statusCode < 300) {
      logger.info(`Solicitud exitosa - ${message}`);
    } else if (statusCode >= 400 && statusCode < 500) {
      logger.warn(`Error del cliente - ${message}`);
    } else if (statusCode >= 500) {
      logger.error(`Error del servidor - ${message}`);
    }
  });

  next();
});


app.get('/', (req, res) => {
  logger.info('Log de prueba en la ruta /');
  res.status(200).send('Bienvenido a mi pagina web');
});


app.get('/zona-restringida', validarAccesoAdmin, (req, res) => {
  
  res.send('Este es el contenido restringido.');
});


app.get('/server-error', (req, res, next) => {
  const error = new Error('Simulated Server Error');
  next(error); 
});


app.use((err, req, res, next) => {
  logger.error(`Server encountered an error on ${req.method} ${req.originalUrl}`); 
  res.status(500).send('Server Error');
});


app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});