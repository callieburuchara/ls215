function myReduce(array, func, initial) {
  let total = initial ? initial : array[0];
  
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0 && !initial) continue;
    total = func(total, array[i]);
    debugger
  }
  
  return total;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
