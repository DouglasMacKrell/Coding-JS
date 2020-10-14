// Array-1 -- makeMiddle
// https://codingjs.wmcicompsci.ca/exercise.html?name=makeMiddle&title=Array-1

// Given an array of ints of even length,
// return a new array length 2 containing
// the middle two elements from the original
// array. The original array will be length
// 2 or more.

// Examples

// makeMiddle([1, 2, 3, 4]) → 2,3
// makeMiddle([7, 1, 2, 3, 4, 9]) → 2,3
// makeMiddle([1, 2]) → 1,2

function makeMiddle(nums) {
  let result = [
    nums[Math.floor(nums.length / 2) - 1],
    nums[Math.floor(nums.length / 2)],
  ];
  return result;
}
