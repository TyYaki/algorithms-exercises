/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array) {
  console.log(array);

  if (typeof array[0] === "object") {
    array[0] = nestedAdd(array[0]);
  }

  if (typeof array[1] === "object") {
    array[1] = nestedAdd(array[1]);
  }

  if (array.length === 1) return array[0];

  if (typeof array[0] === "number" && typeof array[1] === "number") {
    array[1] = array[0] + array[1];
    array.shift();
    return nestedAdd(array);
  }
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
