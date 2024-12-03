import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const { SECRET_MESSAGE } = process.env;

export const validateToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token' });
  }

  try {
    const isValid = await bcrypt.compare(SECRET_MESSAGE, token);

    if (!isValid) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: 'Error interno al validar el token' });
  }
};