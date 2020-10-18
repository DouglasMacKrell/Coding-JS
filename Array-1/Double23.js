// Array-1 -- double23
// https://codingjs.wmcicompsci.ca/exercise.html?name=double23&title=Array-1

// Given an int array, return true if the array
// contains 2 twice, or 3 twice. The array will
// be length 0, 1, or 2.

// Examples

// double23([2, 2]) → true
// double23([3, 3]) → true
// double23([2, 3]) → false

function double23(nums) {
  if (nums[1]) {
    if (nums[0] === 2 && nums[1] === 2) {
      return true;
    } else if (nums[0] === 3 && nums[1] === 3) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
