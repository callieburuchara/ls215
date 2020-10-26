function reverse(string) {
  let newString = '';

  for (let idx = string.length - 1; idx >= 0; idx -= 1) {
    newString += string[idx];
  }

  return newString;
}

// Or

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"
