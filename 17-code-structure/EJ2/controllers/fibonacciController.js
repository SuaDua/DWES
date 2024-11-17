function calculateFibonacci(n) {
    if (n < 0) return "Número inválido";
    if (n <= 1) return n;
  
    let a = 0, b = 1, fib = 1;
    for (let i = 2; i <= n; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }
  
    return fib;
  }
  
  module.exports = { calculateFibonacci };