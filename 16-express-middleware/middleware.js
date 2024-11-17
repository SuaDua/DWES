import express from 'express';

const app = express();
const port = 3001;

const validarAccesoAdmin = (req, res, next) => {
    const password = req.headers['password'];

    if (password === 'patata') {
        // Acceso correcto
        res.status(200).send('Bienvenid@, disfrute del contenido');
    } else {
        // Acceso incorrecto (respuesta en texto plano)
        res.status(401).send(
            "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición"
        );
    }
};

export { validarAccesoAdmin };
