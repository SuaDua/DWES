import express from 'express';
import routes from '../routes/fibonacciRoutes.js';

const startServer = () => {
  const app = express();

  app.use('/api/v1', routes);

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

export default startServer;