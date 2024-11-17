const request = require('supertest');
const express = require('express');
const routes = require('../routes/fibonacciRoutes');

const app = express();
app.use('/api/v1', routes);

describe('/fibonacci', () => {
  test('Debe devolver el valor correcto de Fibonacci', async () => {
    const res = await request(app).get('/api/v1/fibonacci/5');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('5');
  });

  test('Debe devolver un error 400 para entradas inválidas', async () => {
    const res = await request(app).get('/api/v1/fibonacci/invalid');
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("El parámetro debe ser un número válido.");
  });
});