// Array-1 -- biggerTwo
// https://codingjs.wmcicompsci.ca/exercise.html?name=biggerTwo&title=Array-1

// Start with 2 int arrays, a and b, each length 2.
// Consider the sum of the values in each array.
// Return the array which has the largest sum.
// In event of a tie, return a.

// Examples

// biggerTwo([1, 2], [3, 4]) → 3,4
// biggerTwo([3, 4], [1, 2]) → 3,4
// biggerTwo([1, 1], [1, 2]) → 1,2

function biggerTwo(a, b) {
  let sumA = a[0] + a[1];
  let sumB = b[0] + b[1];
  if (sumA > sumB || sumA === sumB) {
    return a;
  } else if (sumA < sumB) {
    return b;
  }
}
