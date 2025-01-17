import express from 'express';
import cors from 'cors';
import apiRoutes from './router/apiroutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes); // Registrar las rutas con el prefijo /api

app.use((req, res) => res.status(404).json({ error: 'Recurso no encontrado' }));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
