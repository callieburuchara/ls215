function isBalanced(str) {
  let checker = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];

    if (char === ')') {
      checker -= 1;
      if (checker < 0) return false;
    } else if (char === '(') {
      checker += 1;
    }
  }

  return checker === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
