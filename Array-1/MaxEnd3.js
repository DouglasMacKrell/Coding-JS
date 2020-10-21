// Array-1 -- maxEnd3
// https://codingjs.wmcicompsci.ca/exercise.html?name=maxEnd3&title=Array-1

// Given an array of ints length 3, figure out which
// is larger, the first or last element in the array,
// and set all the other elements to be that value.
// Return the changed array.

// Examples

// maxEnd3([1, 2, 3]) → 3,3,3
// maxEnd3([11, 5, 9]) → 11,11,11
// maxEnd3([2, 11, 3]) → 3,3,3

function maxEnd3(nums) {
  let result = [];
  if (nums[0] >= nums[2]) {
    result.push(nums[0], nums[0], nums[0]);
  } else if (nums[0] < nums[2]) {
    result.push(nums[2], nums[2], nums[2]);
  } 
  return result;
}
