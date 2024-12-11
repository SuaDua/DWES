import express from 'express';
import { initLoaders } from './loaders/expressLoader.js'; // Inicializar loaders
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig.js'; // Configuración de Swagger

const app = express();
const PORT = process.env.PORT || 3001;


initLoaders(app);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
