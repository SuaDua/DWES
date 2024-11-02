const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  
  const parsedUrl = url.parse(req.url, true);
  const name = parsedUrl.query.name;

 
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (name) {
  
    res.end(`Hello ${name}!`);
  } else {
 
    res.end('Hello, stranger!');
  }
});


server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});