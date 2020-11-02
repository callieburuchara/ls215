/* ============================ INSTRUCTIONS ==============================
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

- Counting from the rightmost digit and moving left, double the value of every second digit
- For any digit that thus become 10 or more, subtract 9 from the result
  - 1111 becomes 2121
  - 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
- Add all these digits together
  - 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
  - 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

- If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.


============================ PEDAC ==============================

PROBLEM
- input: string of integers (and spaces?) 
- output: boolean based on if the input is valid according to Luhn or not

- Note: can ignore all non-numeric characters in the input string — what characters does that include? Any?

The way to check:
- from right to left, double the value of every second digit
- if doubling a digit makes it >= 10, substract 9 from it
- then add all those doubled numbers together
- if that number ends in a 0, the input is valid. If it doesn't, it's not. 

QUESTIONS
- Will I only have integers and spaces in a string as input? ALL CHARACTERS ARE GAME
- Will I ever have an empty string? Or a string with just one number? YES
- Do you want a boolean as the return value? YES
- Will any other type of input be given, such as an array or integer? YES
- Should I return invalid or an error message if the input is invalid? ERROR MESSAGE

EXAMPLES / TEST CASES

console.log(isLuhnValid('2323 2005 7766 3554')) // true // given in instructions
console.log(isLuhnValid('1111'))                // false 
console.log(isLuhnValid('8763'))                // true 
console.log(isLuhnValid(1234))                  // Invalid Input
console.log(isLuhnValid(['hi']))                // Invalid Input
console.log(isLuhnValid('hello!'))              // Invalid Input 
console.log(isLuhnValid('2323 ///2005.fjlk 7766 3554')) // true
console.log(isLuhnValid('2'))                   // Invalid Input

- must pass luhn formula to be true
- valid input must be: a string, cleaned up if necessary, two numbers long (after cleaned up)

DATA STRUCTURES
- Will need to use an array to reverse the string to iterate over it backwards
- Will need to use an integer to keep track of the checksum to see if it passes the tests

ALGORITHM
- return error is the input type is not a string
- clean up the string: only keep numbers
- return invalid if the str is less than 2 characters
- initialize checksum, set it to 0
- split, reverse, and then iterate over input string
  - if it's the first, third, etc, number, add it to the checksum directly (convert to number)
  - double every second number (remember to convert to Number)
  - if that doubling, makes it greater than 10, substract 9 from it
  - then add it to the checksum
- return the result of checksum % 10 === 0

*/

const invalid = 'Invalid Input';

function isLuhnValid(str) {
  if (typeof str !== 'string') return invalid;

  str = str.replace(/[^0-9]/g, '');
  if (str.length < 2) return invalid;

  let checksum = 0;

  str.split('').reverse().forEach((number, idx) => {
    number = Number(number)
    if (idx % 2 === 0) {
      checksum += number;
      return; 
    } else {
      number = number * 2;
      if (number >= 10) number = number - 9;
      checksum += number;
    }
  });

  return (checksum % 10 === 0);
}

console.log(isLuhnValid('2323 2005 7766 3554')) // true // given in instructions
console.log(isLuhnValid('1111'))                // false 
console.log(isLuhnValid('8763'))                // true 
console.log(isLuhnValid(1234))                  // Invalid Input
console.log(isLuhnValid(['hi']))                // Invalid Input
console.log(isLuhnValid('hello!'))              // Invalid Input 
console.log(isLuhnValid('2323 ///2005.fjlk 7766 3554')) // true
console.log(isLuhnValid('2'))                   // Invalid Input

