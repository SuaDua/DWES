const { calculateFibonacci } = require('../controllers/fibonacciController');

describe('calculateFibonacci', () => {
  test('Debe devolver el valor correcto de Fibonacci para entradas positivas', () => {
    expect(calculateFibonacci(3)).toBe(2);
    expect(calculateFibonacci(5)).toBe(5);
  });

  test('Debe devolver 0 para el input 0', () => {
    expect(calculateFibonacci(0)).toBe(0);
  });

  test('Debe devolver "Número inválido" para números negativos', () => {
    expect(calculateFibonacci(-5)).toBe("Número inválido");
  });
});