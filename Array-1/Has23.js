// Array-1 -- has23
// https://codingjs.wmcicompsci.ca/exercise.html?name=has23&title=Array-1

// Given an int array length 2, return true
// if it contains a 2 or a 3.

// Examples

// has23([2, 5]) → true
// has23([4, 3]) → true
// has23([4, 5]) → false

function has23(nums) {
  for (let num of nums) {
    if (num === 2 || num === 3) {
      return true;
    }
  }
  return false;
}
