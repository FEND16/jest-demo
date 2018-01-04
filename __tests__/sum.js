const sum = require('../src/sum');

test('returns 0 if nothing passed', () => {
  const result = sum();
  expect(result).toEqual(0);
});

test('return 1 number if passed', () => {
  const result = sum(4);
  expect(result).toEqual(4);
})

test('add two numbers', () => {
  const result = sum(5,5);
  expect(result).toEqual(10);
})

test('adds multiple numbers', () => {
  const result = sum(5,5,6);
  expect(result).toEqual(16);
})