/* ============================ INSTRUCTIONS ===============================
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

- "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
- "1-3, 1-2" --> 1, 2, 3, 11, 12
- "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
- "104-2" --> 104, 105, ... 112
- "104-02" --> 104, 105, ... 202
- "545, 64:11" --> 545, 564, 565, .. 611

============================ PEDAC ===============================
PROBLEM
- input: strings of ranges
- output: array of integers (confirm)

RULES
- possible range separators limited to ["-", ":", ".."]
- the input always increases, never decreases
- the first number (in full) represents the starting place
- the next number must end in the next given integer, however high it needs to go
- EX: '"545, 64:11"' -> starts at 545. Next number that ends in '64' is '564'. The next number that ends in '11' is '611', Thus, the range is 545 - 611
- If a comma separates two numbers, they're two separate numbers; we don't do a range between them
- Range limits are always inclusive : 1-3 === [1, 2, 3]

QUESTIONS
- will all input be a string? YES
- will all input be a string with only valid input: integers, separators, and commas? YES
- Is there a minimum input? YES : 1
- Is there a maximum input? YES : 1000

EXAMPLES / TEST CASES
console.log(convertRange("1, 3, 7, 2, 4, 1"));     // 1, 3, 7, 12, 14, 21
console.log(convertRange("1-3, 1-2"));             // 1, 2, 3, 11, 12
console.log(convertRange("1:5:2"));                // 1, 2, 3, 4, 5, 6, ... 12
console.log(convertRange("104-2"));                // 104, 105, ... 112
console.log(convertRange("104-02"));               // 104, 105, ... 202
console.log(convertRange("545, 64:11"));           // 545, 564, 565, .. 611

DATA STRUCTURES
- Separate all numbers by commas into an ARRAY
- Use Regex to separate ranges by -, :, or ..

ALGORITHM
convertRange
- create a result array to store the full answer
- separate input by commas & iterate over each section
  - if the item is just a number && it's the first index, just add it to the result array
  - if the item is a range && it's the first index, 
  - if the item is a number only, add the nextHighest number to result array
  - if the item has 1+ of the delimiters in it, pass it to the convertSmallRange method, then concat the return array to the result array
- return result array

convertSmallRange(lastNumber, range)
- create resultArray
- break apart the small range into individual numbers [ there might just be 2, and there might be 3...] -> [1, 5, 2]
- set starting number: nextHighest based on smallRange.firstItem
- iterate over broken apart range (for loop, starting on smallRange.secondItem)
  - keep adding one more until the current number ends with the target of the current index position 
  - keep iterating over the entire small range
- return resultArray

nextHighest(start, pattern)
- patternLength = pattern.length
- starting at the current number
  - keep adding one until the String(number).slice(current.length - patternLength)
- return that number


doesItEndWith(target, pattern)
- turn target into string
- check if the last pattern.length characters ends with pattern
- return true if it does, false otherwise

REGEX: split(/:|-|\.\./)

*/

const delimiters = /:|-|\.\./g;

function convertRange(str) {
  let fullRange = [];
  const numberSections = str.split(', ');

  numberSections.forEach((section, idx) => {
    const last = fullRange[fullRange.length - 1];
    
    if (section.match(delimiters)) {
      fullRange = fullRange.concat(convertSmallRange(last, section));
    } else {
      fullRange.push(nextHighest(last, section));
    }
  });
  
  return fullRange;
}

function convertSmallRange(lastNumber, range) {
  let splitRange = range.split(delimiters);
  let firstNumber = splitRange[0];
  let currentNumber = (lastNumber ? nextHighest(lastNumber, firstNumber) : firstNumber);
  let smallRange = [];

  for (let idx = 1; idx < splitRange.length; idx += 1) {
    const pattern = splitRange[idx];
    
    while (!doesItEndWith(currentNumber, pattern)) {
      smallRange.push(Number(currentNumber));
      currentNumber = Number(currentNumber) + 1;
    }
    smallRange.push(Number(currentNumber));
    currentNumber = currentNumber + 1;
  }
  return smallRange;
}

function nextHighest(start, pattern) {
  if (!start) return Number(pattern);
  let number = Number(start);

  while (!doesItEndWith(number, pattern)) {
    number += 1;
  }

  return number;

}

function doesItEndWith(number, pattern) {
  number = String(number);
  const length = pattern.length;
  return number.slice(number.length - pattern.length) === pattern;
}


console.log(convertRange("1, 3, 7, 2, 4, 1"));     // 1, 3, 7, 12, 14, 21
console.log(convertRange("1-3, 1-2"));             // 1, 2, 3, 11, 12
console.log(convertRange("1:5:2"));                // 1, 2, 3, 4, 5, 6, ... 12
console.log(convertRange("104-2"));                // 104, 105, ... 112
console.log(convertRange("104-02"));               // 104, 105, ... 202
console.log(convertRange("545, 64:11"));           // 545, 564, 565, .. 611
console.log(convertRange("5..3, 2..1..0"));        // 5, 6, ...13, 22, 23..40


