/* ============================ INSTRUCTIONS ==============================
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

============================ PEDAC ==============================
PROBLEM
- input: string of letters
- output: boolean (based on the input being a block word or not)

RULES
- can only use one of the letters in a pair
- If both letters in a pair are used in the word, then it's not a block word
- Case does not matter

QUESTIONS
- Will the input ever not be a string? NO
- Will the string ever need to be cleaned up? YES
- Can only use each block once: does that mean I can or cannot say 'BB' as a valid block word? ASSUME BLOCK IS ONLY USED ONCE; NO REPEAT LETTERS

EXAMPLES / TEST CASES
console.log(isBlockWord('BATCH'));       // true
console.log(isBlockWord('BUTCH'));       // false
console.log(isBlockWord('jest'));        // true
console.log(isBlockWord('JeSt2938fe'));  // true
console.log(isBlockWord('ZfLgN'));       // true
console.log(isBlockWord('LY'));          // false
console.log(isBlockWord('LLL'));         // false
console.log(isBlockWord(''));            // false
console.log(isBlockWord('1232498'));     // false
console.log(isBlockWord('^%*&'));        // false

- case doesn't matter
- can only use blocks once: both letters can't be used in a block && a letter can't be repeated in the word

DATA STRUCTURES
- Nested arrays for the letter pairs: [['b', 'o'], ['g', 't']...]

ALGORITHM
- set up nested array of all block letter pairings, all lower case

- clean up the input: ensure it's only letters & downcase it
- return false if empty string
- return false if the unique version of the str is not the same size as the array (unique = [...new Set (arr)])
- iterate through each nested array
  - if both letters in the nested array are in the input word, return false
- If full iteration completes, return true


B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M


*/

const blockLetters = [['b', 'o'], ['g', 't'], ['v', 'i'], ['x', 'k'], 
                      ['r', 'e'], ['l', 'y'], ['d', 'q'], ['f', 's'], 
                      ['z', 'm'], ['c', 'p'], ['j', 'w'], ['n', 'a'],   
                      ['h', 'u']];

function isBlockWord(str) {
  str = str.replace(/[^a-z]/ig, '').toLowerCase();
  if (str.length === 0) return false;

  const unique = [...new Set(str.split(''))];
  if (str.length !== unique.length) return false;

  for (let idx = 0; idx < blockLetters.length; idx += 1) {
    let block = blockLetters[idx]

    if (str.includes(block[0]) && str.includes(block[1])) {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));       // true
console.log(isBlockWord('BUTCH'));       // false
console.log(isBlockWord('jest'));        // true
console.log(isBlockWord('JeSt2938fe'));  // false
console.log(isBlockWord('ZfLgN'));       // true
console.log(isBlockWord('LY'));          // false
console.log(isBlockWord('LLL'));         // false
console.log(isBlockWord(''));            // false
console.log(isBlockWord('1232498'));     // false
console.log(isBlockWord('^%*&'));        // false
