import express from 'express';
import cors from 'cors';
import notesRoutes from '../routes/notesRoutes.js';
import usersRoutes from '../routes/usersRoutes.js';

export default (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  app.use('/notes', notesRoutes);
  app.use('/users', usersRoutes);


  app.use((req, res) => res.status(404).send('Not Found'));
};