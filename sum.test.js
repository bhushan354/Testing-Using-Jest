const reverseString = require('./sum.js');

test ('reversestring testing',  ()=>{
  const inputString = "Bhusha";
  const reversed = reverseString(inputString);
  expect(reversed).toBe("ahsuhB"); 
});

test('testing empty string', ()=> {
  const inputString = '';
  const reversed = reverseString(inputString);
  expect(reversed).toBe('');
});
