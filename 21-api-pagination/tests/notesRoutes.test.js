import request from 'supertest';
import express from 'express';
import notesRoutes from '../routes/notesRoutes.js';

const app = express();
app.use(express.json());
app.use('/notes', notesRoutes);

describe('Notas: Ordenar', () => {
    test('Ordenar por título', async () => {
        const res = await request(app).get('/notes?sort=title');
        expect(res.status).toBe(200);
        expect(res.body[0].title).toBe('A Nota'); // Cambiar según los datos de prueba
    });

    test('Ordenar por tamaño', async () => {
        const res = await request(app).get('/notes?sort=size');
        expect(res.status).toBe(200);
        expect(res.body[0].size).toBeGreaterThan(res.body[1].size);
    });
});