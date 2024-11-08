import express from 'express';

const app = express();
const port = 3001;


function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  }
  return n;
}


app.get('/fizzbuzz/:n', (req, res) => {

  const n = parseInt(req.params.n, 10);


  if (isNaN(n)) {
    return res.status(400).send('Bad Request: n must be a number');
  }


  const result = fizzBuzz(n);
  res.send(`Result: ${result}`);
});

app.listen(port, () => {
  console.log(`FizzBuzz app listening on port ${port}`);
});