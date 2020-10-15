// Array-1 -- sameFirstLast
// https://codingjs.wmcicompsci.ca/exercise.html?name=sameFirstLast&title=Array-1

// Given an array of ints, return true if
// the array is length 1 or more, and the
// first element and the last element are
// equal.

// Examples

// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true

function sameFirstLast(nums) {
  if (nums.length >= 1 && nums[0] === nums[nums.length - 1]) {
    return true;
  } else {
    return false;
  }
}
