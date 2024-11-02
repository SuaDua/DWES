const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  const num = parseInt(query.num);

  
  res.writeHead(200, { 'Content-Type': 'text/plain' });


  if (!isNaN(num) && num > 0) {
    
    const fizzBuzzSequence = [];
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzSequence.push("FizzBuzz");
      } else if (i % 3 === 0) {
        fizzBuzzSequence.push("Fizz");
      } else if (i % 5 === 0) {
        fizzBuzzSequence.push("Buzz");
      } else {
        fizzBuzzSequence.push(i);
      }
    }

    
    res.end(fizzBuzzSequence.join(", "));
  } else {
  
    res.end('Por favor, proporciona un numero valido en el query string. Ejemplo: /fizzbuzz?num=15');
  }
});


server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});