import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const { ADMIN_USER, SECRET_MESSAGE } = process.env;

export const generateToken = async (req, res) => {
  const { username } = req.body;

  if (username !== ADMIN_USER) {
    return res.status(401).json({ error: 'Usuario no autorizado' });
  }

  try {
    const hashedToken = await bcrypt.hash(SECRET_MESSAGE, 10);
    res.status(200).json({ token: hashedToken });
  } catch (error) {
    res.status(500).json({ error: 'Error generando el token' });
  }
};