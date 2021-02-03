// Array-2 -- isEverywhere
// https://codingjs.wmcicompsci.ca/exercise.html?name=isEverywhere&title=Array-2

// We'll say that a value is "everywhere" in an array if for every pair of adjacent
// elements in the array, at least one of the pair is that value. Return true if
// the given value is everywhere in the array.

// Examples

// isEverywhere([1, 2, 1, 3], 1) → true
// isEverywhere([1, 2, 1, 3], 2) → false
// isEverywhere([1, 2, 1, 3, 4], 1) → false

function isEverywhere(nums, val) {
  let check = val;
  for (let i = 0; i < nums.length; i++) {
    if (check === nums[i]) {
      i += 1;
    }
    if (check === nums[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
