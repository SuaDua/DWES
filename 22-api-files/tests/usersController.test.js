import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/usersController.js';

describe('Users Controller', () => {
  test('Debería listar todos los usuarios', () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    getAllUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  test('Debería obtener un usuario por ID', () => {
    const req = { params: { id: '1' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    getUserById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  test('Debería devolver 404 si el usuario no existe', () => {
    const req = { params: { id: '99' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    getUserById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('Usuario no encontrado');
  });

  test('Debería crear un nuevo usuario', () => {
    const req = { body: { name: 'Nuevo Usuario', email: 'nuevo@example.com' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });

  test('Debería actualizar un usuario existente', () => {
    const req = { params: { id: '1' }, body: { name: 'Usuario Actualizado', email: 'actualizado@example.com' } }; // Incluye 'email'
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  test('Debería devolver 404 si el usuario a actualizar no existe', () => {
    const req = { params: { id: '99' }, body: { name: 'No existe', email: 'noexiste@example.com' } }; // Incluye 'email'
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('Usuario no encontrado');
  });

  test('Debería eliminar un usuario existente', () => {
    const req = { params: { id: '1' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    deleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('Usuario eliminado');
  });

  test('Debería devolver 404 si el usuario a eliminar no existe', () => {
    const req = { params: { id: '99' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    deleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('Usuario no encontrado');
  });
});