const sum = require('../src/sum');

test('returns 0 if nothing passed', () => {
  const result = sum();
  expect(sum()).toEqual(result);
});

test('return 1 number if passed', () => {
  const result = sum(4);
  expect(sum(4)).toEqual(result);
})

test('add two numbers', () => {
  const result = sum(5,5);
  expect(sum(5,5)).toEqual(result);
})

test('adds multiple numbers', () => {
  const result = sum(5,5,6);
  expect(sum(5,5,6)).toEqual(result);
})