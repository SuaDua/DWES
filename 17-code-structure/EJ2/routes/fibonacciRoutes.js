const { Router } = require('express');
const { calculateFibonacci } = require('../controllers/fibonacciController');

const router = Router();

router.get('/fibonacci/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    return res.status(400).send("El parámetro debe ser un número válido.");
  }

  const result = calculateFibonacci(number);
  res.send(`${result}`);
});

module.exports = router;