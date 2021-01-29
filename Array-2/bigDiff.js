// Array-2 -- bigDiff
// https://codingjs.wmcicompsci.ca/exercise.html?name=bigDiff&title=Array-2

// Given an array length 1 or more of ints, return the difference between the
// largest and smallest values in the array. Note: the built-in Math.min(v1, v2)
// and Math.max(v1, v2) methods return the smaller or larger of two values.

// Examples

// bigDiff([10, 3, 5, 6]) → 7
// bigDiff([7, 2, 10, 9]) → 8
// bigDiff([2, 10, 7, 2]) → 8

function bigDiff(nums) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      if (max === -Infinity) {
        max = min;
      }
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return Math.abs(max - min);
}
