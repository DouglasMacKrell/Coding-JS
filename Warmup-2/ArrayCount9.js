// Warmup-2 -- arrayCount9
// https://codingjs.wmcicompsci.ca/exercise.html?name=arrayCount9&title=Warmup-2

// Given an array of ints, return the number of 9's in the array.

// Examples

// arrayCount9([1,2,9]) → 1
// arrayCount9([1,9,9]) → 2
// arrayCount9([1,9,9,3,9]) → 3

function arrayCount9(nums) {
  let count = 0;
  for (let num of nums) {
    if (num === 9) {
      count += 1;
    }
  }
  return count;
}
