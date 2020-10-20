// Array-1 -- fix23
// https://codingjs.wmcicompsci.ca/exercise.html?name=fix23&title=Array-1

// Given an int array length 3, if there is a 2
// in the array immediately followed by a 3,
// set the 3 element to 0. Return the changed array.

// Examples

// fix23([1, 2, 3]) → 1,2,0
// fix23([2, 3, 5]) → 2,0,5
// fix23([1, 2, 1]) → 1,2,1

function fix23(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === 2 && nums[i] === 3) {
      result.push(0);
    } else {
      result.push(nums[i]);
    }
  }
  return result;
}
