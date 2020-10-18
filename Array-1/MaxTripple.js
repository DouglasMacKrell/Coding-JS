// Array-1 -- maxTriple
// https://codingjs.wmcicompsci.ca/exercise.html?name=maxTriple&title=Array-1

// Given an array of ints of odd length,
// look at the first, last, and middle values
// in the array and return the largest.
// The array length will be a least 1.

// Examples

// maxTriple([1, 2, 3]) → 3
// maxTriple([1, 5, 3]) → 5
// maxTriple([5, 2, 3]) → 5

function maxTriple(nums) {
  let first = nums[0];
  let middle = nums[Math.floor(nums.length / 2)];
  console.log(middle)
  let last = nums[nums.length - 1];
  let max = 0;
  let test = [first, middle, last];
  for (let num of test) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}


console.log(maxTriple([5, 2, 3]));