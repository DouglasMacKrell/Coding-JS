// Array-2 -- no14
// https://codingjs.wmcicompsci.ca/exercise.html?name=no14&title=Array-2

// Given an array of ints, return true if it contains no 1's or it contains no 4's.

// Examples

// no14([1, 2, 3]) → true
// no14([1, 2, 3, 4]) → false
// no14([2, 3, 4]) → true

function no14(nums) {
  let has1 = false;
  let has4 = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      has1 = true;
    }
    if (nums[i] === 4) {
      has4 = true;
    }
  }
  if (has1 && has4) {
    return false;
  } else {
    return true;
  }
}
