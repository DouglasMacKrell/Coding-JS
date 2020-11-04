// Warmup-2 -- arrayFront9
// https://codingjs.wmcicompsci.ca/exercise.html?name=arrayFront9&title=Warmup-2

// Given an array of ints, return true if one of
// the first 4 elements in the array is a 9.
// The array length may be less than 4.

// Examples

// arrayFront9([1,2,9,3,4]) → true
// arrayFront9([1,2,3,4,9]) → false
// arrayFront9([1,2,3,4,5]) → false

function arrayFront9(nums) {
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    if (i < 4) {
      if (nums[i] === 9) {
        result = true;
        return result;
      }
    }
  }
  return result;
}
