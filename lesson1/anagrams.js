/*
PROBLEM
- input: string & array of strings, pattern & possible anagrams
- output: array of strings that are anagrams of pattern

- set pattern as the world split and sorted
- use filter
  -- select all words that are the same when split & sorted as the pattern

*/

function anagram(pattern, list) {
  pattern = pattern.split('').sort().join();

  return list.filter(word => pattern === word.split('').sort().join());
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
