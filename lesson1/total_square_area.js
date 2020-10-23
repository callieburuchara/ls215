// iterate through each sub array and turn it into a product of the two numbers (map)
// then, use reduce and add all of these numbers together

function totalArea(rectangles) {
  let products = rectangles.map(nestedProduct);
  return products.reduce((accum, num) => accum + num);
}

function nestedProduct(subarr) {
  return subarr[0] * subarr[1];
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141

////////////


function totalSquareArea(rectangles) {
  let squares = rectangles.filter(sub => sub[0] === sub[1]);
  let products = squares.map(nestedProduct);
  return products.reduce((sum, num) => sum + num);
 }

console.log(totalSquareArea(rectangles));    // 121

