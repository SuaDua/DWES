import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const secretMessage = process.env.SECRET_MESSAGE;

// Generar un token encriptado
export const generateToken = async (req, res) => {
    const { username } = req.body;

    if (username !== process.env.ADMIN_USERNAME) {
        return res.status(401).json({ error: 'Acceso denegado: Usuario inválido' });
    }

    try {
        const hashedToken = await bcrypt.hash(secretMessage, 10);
        res.status(200).json({ token: hashedToken });
    } catch (error) {
        res.status(500).json({ error: 'Error interno al generar el token' });
    }
};

// Validar el token recibido
export const validateToken = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado: No se proporcionó un token' });
    }

    try {
        const isValid = await bcrypt.compare(secretMessage, token);

        if (!isValid) {
            return res.status(403).json({ error: 'Acceso denegado: Token inválido' });
        }

        next(); // Token válido, proceder al siguiente middleware
    } catch (error) {
        res.status(500).json({ error: 'Error interno al validar el token' });
    }
};