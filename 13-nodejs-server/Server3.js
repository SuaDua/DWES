const http = require('http');
const fs = require('fs');
const path = require('path');

// Función para servir un archivo HTML según la ruta
function serveFile(filePath, res) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error al cargar la página');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
}

http.createServer((req, res) => {
  // Enrutamiento básico
  if (req.url === '/') {
    serveFile(path.join(__dirname, 'index.html'), res);
  } else if (req.url === '/about') {
    serveFile(path.join(__dirname, 'about.html'), res);
  } else if (req.url === '/contact') {
    serveFile(path.join(__dirname, 'contact.html'), res);
  } else {
    // Página no encontrada
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 - Página no encontrada</h1>');
  }
}).listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});