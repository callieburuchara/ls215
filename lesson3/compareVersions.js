/* =========================== PEDAC =================================
PROBLEM
input: 2 versions (2.0.3 or 3.0.1 or 4.1 or 5, etc.)
output:
  - 1 if version 1 > version 2
  - -1 if version 1 < version 2
  - 0 if they're equal
  - null if input contains any non numeric or non . characters

EXAMPLES / TEST CASES
- input needs to be validated (at the top)
- from left to right:
  - numbers are separated by periods
  - the number further right only needs to be consulted if the previous 
    numbers are the same (e.g. 2.0.5 vs. 1.8.9 only needs to look @ the first)
- need to use explicit return statements throughout the code 

- What if the inputs aren't the same length?
1.5 vs. 1.5.1 

DATA STRUCTURES
- Array -> splitting the numbers by periods
- iterating through both at the same time possibly

ALGORITHM
- return null if input is invalid: only numbers and periods
  - input should not match: /[^0-9\.]/

- split input1 into an array by fullstops & turn into numbers
- split input2 into an array by fullstops & turn into numbers

- use a for loop (while the idx is less than either of the lengths)
  - if input1 is undefined, return -1
  - if input 2 is undefined, return 1
  - if input1 is larger, return 1
  - if input1 is less than, return -1
- if the for loop ran the whole time, then they're the same, so return 0
*/

/* =========================== FUNCTION ================================= */


function compareVersions(ver1, ver2) {
  let regex = /([0-9]+\.?[0-9]+)+|(^[0-9]+$)/;

  if (!ver1.match(regex) || !ver2.match(regex)) return null;
  
  ver1 = ver1.split('.').map(Number);
  ver2 = ver2.split('.').map(Number);    

  for (let idx = 0; (idx < ver1.length || idx < ver2.length) ; idx += 1) {
    if (ver1[idx] && !ver2[idx]) return 1;
    if (!ver1[idx] && ver2[idx]) return -1;
    if (ver1[idx] < ver2[idx]) return -1;
    if (ver1[idx] > ver2[idx]) return 1;
  }

  return 0;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
