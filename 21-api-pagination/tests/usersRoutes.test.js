
import request from 'supertest';
import express from 'express';
import usersRoutes from '../routes/usersRoutes.js';

// Crear una instancia de la aplicación con las rutas
const app = express();
app.use(express.json());
app.use('/users', usersRoutes);

describe('Users Routes', () => {
  test('GET /users debería devolver una lista de usuarios', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  test('GET /users/:id debería devolver un usuario específico', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  test('GET /users/:id debería devolver 404 si el usuario no existe', async () => {
    const res = await request(app).get('/users/99');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Usuario no encontrado');
  });

  test('POST /users debería crear un nuevo usuario', async () => {
    const newUser = { name: 'Nuevo Usuario', email: 'nuevo@example.com' };
    const res = await request(app).post('/users').send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(newUser.name);
  });

  test('PUT /users/:id debería actualizar un usuario existente', async () => {
    const updatedUser = { name: 'Usuario Actualizado', email: 'actualizado@example.com' };
    const res = await request(app).put('/users/1').send(updatedUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(updatedUser.name);
  });

  test('PUT /users/:id debería devolver 404 si el usuario no existe', async () => {
    const updatedUser = { name: 'No existe', email: 'noexiste@example.com' };
    const res = await request(app).put('/users/99').send(updatedUser);
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Usuario no encontrado');
  });

  test('DELETE /users/:id debería eliminar un usuario', async () => {
    const res = await request(app).delete('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Usuario eliminado');
  });

  test('DELETE /users/:id debería devolver 404 si el usuario no existe', async () => {
    const res = await request(app).delete('/users/99');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Usuario no encontrado');
  });
});