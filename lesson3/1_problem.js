/*
INSTRUCTIONS

Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

- If the phone number is less than 10 digits, assume that it is a bad number.
- If the phone number is 10 digits, assume that it is good.
- If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
- If the phone number is 11 digits and the first number is not 1, then it is a bad number.
- If the phone number is more than 11 digits, assume that it is a bad number.

For bad numbers, just a return a string of 10 0s.

=============================== PEDAC ====================================
PROBLEM
- input: string of a phone number
- output: cleansed string of a phone number
--> am I sure these are strings?
- if bad numbers, return a string of 10 0s

Good numbers: must be exactly 10 digits, or 11 digits if the first number is 1
Cleaned numbers: assuming they're valid, exclude the first one if it's 11 digits
                 and return just the digits, no special characters included

EXAMPLES/TEST CASES

cleanPhoneNumber('1234') // returns 0000000000 // not 10 characters
cleanPhoneNumber('1234567890') // is good // returns: 1234567890
cleanPhoneNumber('1123456789') // is good; trim the first 1 and use the rest // returns: 1234567890
cleanPhoneNumber('01234567890') // bad number: 11 digits & first is not 1 // returns 0000000000
cleanPhoneNumber('123-456-7&89') // returns '0000000000' because not 10 (or 11) digits
cleanPhoneNumber('12&34%56**78. j90') // returns 1234567890, all non digits stripped away

DATA STRUCTURES
- Input and output are both strings
- May use RegExp to clean up input string

ALGORITHM
- Clean up input string
  - use `replace` to replace all non-numbers with ''
- Return 10 0s if the input string is not 10 or 11 numbers
  - if the cleaned input string is less than 10 or more than 11 characters, return 10 0s
  - if it's eleven characters && the first character is a 1, reassign cleaned input to itself without the first number
  - otherwise return 10 0s
- If it is valid, return the cleaned up input string
  - if you make it to this point, return cleaned input as is
*/

function cleanPhoneNumber(str) {
  let error = '0000000000';
  if (typeof str !== 'string') return error;
  
  str = str.replace(/[^0-9]/g, '');
  
  if (str.length < 10 || str.length > 11) return error;

  if (str.length === 11 && str[0] !== '1') return error;

  if (str.length === 11) {
    return str.slice(1);
  } else {
    return str
  }

}
console.log(cleanPhoneNumber('1234')) // returns 0000000000 // not 10 characters
console.log(cleanPhoneNumber('1234567890')) // is good // returns: 1234567890
console.log(cleanPhoneNumber('1123456789')) // is good; trim the first 1 and use the rest // returns: 1234567890
console.log(cleanPhoneNumber('01234567890')) // bad number: 11 digits & first is not 1 // returns 0000000000
console.log(cleanPhoneNumber('123-456-7&89')) // returns '0000000000' because not 10 (or 11) digits
console.log(cleanPhoneNumber('12&34%56**78. j90')) // returns 1234567890, all non digits stripped away
console.log(cleanPhoneNumber([])); // returns 0000000000
console.log(cleanPhoneNumber('')); // returns 0000000000
