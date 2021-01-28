// Array-2 -- fizzArray3
// https://codingjs.wmcicompsci.ca/exercise.html?name=fizzArray3&title=Array-2

// Given start and end numbers, return a new array containing the sequence of
// integers from start up to but not including end, so start=5 and end=10 yields
// {5, 6, 7, 8, 9}. The end number will be greater or equal to the start number.
// Note that a length-0 array is valid.

// Examples

// fizzArray3(5, 10) → 5,6,7,8,9
// fizzArray3(11, 18) → 11,12,13,14,15,16,17
// fizzArray3(1, 3) → 1,2

function fizzArray3(start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
