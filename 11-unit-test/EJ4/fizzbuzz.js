function fizzBuzz(n, conditions) {
  let result = '';

  // Recorremos las condiciones del objeto y las aplicamos al número n
  for (const [key, value] of Object.entries(conditions)) {
    if (n % key === 0) {
      result += value;
    }
  }

  return result || n;
}

module.exports = fizzBuzz;