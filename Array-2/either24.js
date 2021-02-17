// Array-2 -- either24
// https://codingjs.wmcicompsci.ca/exercise.html?name=either24&title=Array-2

// Given an array of ints, return true if the array contains a 2 next to
// a 2 or a 4 next to a 4, but not both.

// Examples

// either24([1, 2, 2]) → true
// either24([4, 4, 1]) → true
// either24([4, 4, 1, 2, 2]) → false

function either24(nums) {
  let hasDupe2 = false;
  let hasDupe4 = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
      if (nums[i + 1] === 2) {
        hasDupe2 = true;
      }
    } else if (nums[i] === 4) {
      if (nums[i + 1] === 4) {
        hasDupe4 = true;
      }
    }
  }
  if (hasDupe2 && !hasDupe4) {
    return true;
  } else if (hasDupe4 && !hasDupe2) {
    return true;
  } else {
    return false;
  }
}
