const fizzBuzz = require('./fizzbuzz');

test('Should return 1 when no condition matches', () => {
  const result = fizzBuzz(1, { 2: 'poo', 3: 'fizz' });
  expect(result).toBe(1);
});

test('Should return fizz when divisible by 3', () => {
  const result = fizzBuzz(3, { 2: 'poo', 3: 'fizz' });
  expect(result).toBe('fizz');
});

test('Should return buzz when divisible by 5', () => {
  const result = fizzBuzz(5, { 2: 'poo', 5: 'buzz' });
  expect(result).toBe('buzz');
});

test('Should return poo when divisible by 2', () => {
  const result = fizzBuzz(4, { 2: 'poo', 3: 'fizz' });
  expect(result).toBe('poo');
});

test('Should return fizzbuzz when divisible by both 3 and 5', () => {
  const result = fizzBuzz(15, { 3: 'fizz', 5: 'buzz' });
  expect(result).toBe('fizzbuzz');
});