function foo(list) {
  return list.map(function (word) {
      return word.match(/[aeiou]/ig) || [];
    }).reduce(function (acc, letterList) {
      return acc + letterList.length;
    }, 0);
}

console.log(foo(['cart', 'truck', 'cart', 'train'])); // 5
console.log(foo(['apple', 'banana', 'orange']));      // 8
console.log(foo(['a', 'b', 'c']));                    // 1
console.log(foo(['a', 'e', 'i', 'o', 'u']	));         // 5
