const add = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 10 + 5 to equal 15', () => {
  expect(add(10, 5)).toBe(15);
});
