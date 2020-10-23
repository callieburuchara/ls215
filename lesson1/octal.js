// 5 * (10 ** 2) --> how to multiply 5 by 10^2
/*
PROBLEM
- input: string: octal number
- output: number: decinal version of input

- octal: multiplied by 8 ( 5 * (8 ** 1))
- decimal: multiplied by ten ( 5 * (10 ** 1))

EXAMPLES
- in converting the number, the "raised to" increases by 1 moving from right to left
- 10 --> (0 * (8 ** 0)) + (1 * (8 ** 1))

DATA STRUCTURES
- numbers
- strings
- probably a for loop to iterate over the string

ALGORITHM
- split the numberStr, reverse it
- use reduce: sum, currentnum, idx, array we're iterating over
- add to sum the result of
  - currentnum * Math.pow(8, idx)
  - ensure reduce starts at 0

*/

function octalToDecimal(numberString) {
  return numberString.split('').reverse().reduce((sum, num, idx, arr) => {
    return sum + (num * Math.pow(8, idx));
  }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
