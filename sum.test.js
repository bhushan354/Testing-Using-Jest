const stringLength = require('./sum.js');
const inputString = "Hello";
test('stringLength test', () => {
 
  const result = stringLength(inputString);
  expect(result).toBe(inputString.length);
});

test('throws error for less than 1 character', () => {
  const inputString = '';
  expect(() => stringLength(inputString)).toThrowError("String must be at least 1 character long");
});

test('throws error for string longer than 10 characters', () => {
  const inputString = 'ThisIsTooLong';
  expect(() => stringLength(inputString)).toThrowError("String must be less than 10 character");
});
