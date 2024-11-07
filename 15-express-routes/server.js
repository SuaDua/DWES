import express from 'express';

const app = express();


app.get('/header', (req, res) => {
  
  const token = req.headers['token'];

  if (!token) {
  
    res.status(401).json({
      code: 401,
      error: "Unauthorized",
      message: "Error: Set a token to login"
    });
    return; 
  }

  console.log('Token:', token);

  res.send('Token recibido. Revisa la consola para ver el valor.');
});


app.get('/params/:name', (req, res) => {
  const { name } = req.params; 
  res.send(`Hola ${name}`);
});

app.get('/query', (req, res) => {

  const n = parseInt(req.query.n) || 100;

  let suma = 0;
  for(let i = 1; i <= n; i++){
    suma += i;
  }

    res.send(`La suma de todos los números desde 1 hasta ${n} es ${suma}`);
});

app.use(express.json());

app.post('/body', (req, res) => {
  const bodyData = req.body;

  
  let textResponse = 'Datos recibidos:\n';
  for (const [key, value] of Object.entries(bodyData)) {
    textResponse += `${key}: ${value}\n`;
  }

  
  res.setHeader('Content-Type', 'text/plain');
  res.send(textResponse);
});

const animalsRouter = express.Router();

animalsRouter.get('/dog', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send("grow: guau guau");
});

animalsRouter.get('/cat', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send("grow: miau");
});

animalsRouter.get('/bird', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send("grow: pio pio");
});

app.use('/animals', animalsRouter);

app.use((req, res) => {
  res.status(404);
  res.setHeader('Content-Type', 'text/plain');
  res.send("Error: Path not found. Código: 404, Descripción: Not Found");
});


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});