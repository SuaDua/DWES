import express from 'express';
import cors from 'cors';
import routes from '../routers/index.js';

export default (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/v1', routes);

  // Middleware para manejar errores 404
  app.use((req, res) => {
    res.status(404).send('Not Found'); // Devuelve texto plano
  });
};
