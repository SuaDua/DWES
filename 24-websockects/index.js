const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const PORT = 3000;

// Servidor HTTP
const server = http.createServer(app);

// Configura WebSocket con el servidor HTTP
const io = new Server(server);

// Servir archivos estáticos
app.use(express.static('public'));

// Ruta básica
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Configuración de eventos WebSocket
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Escuchar mensajes del cliente
  socket.on('clientMessage', (message) => {
    console.log(`Mensaje del cliente: ${message}`);
    socket.emit('serverMessage', `Recibido: ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});