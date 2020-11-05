// Warmup-2 -- noTriples
// https://codingjs.wmcicompsci.ca/exercise.html?name=noTriples&title=Warmup-2

// Given an array of ints, we'll say that a triple is a
// value appearing 3 times in a row in the array.
// Return true if the array does not contain any triples.

// Examples

// noTriples([1,1,2,2,1]) → true
// noTriples([1,1,2,2,2,1]) → false
// noTriples([1,1,2,2,2,1]) → false

function noTriples(nums) {
  if (nums.length < 3) {
    return true;
  }
  let myObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (myObj[nums[i]]) {
      myObj[nums[i]] += 1;
    } else {
      myObj[nums[i]] = 1;
    }
  }
  for (let num in myObj) {
    if (myObj[num] === 3) {
      return true;
    }
  }
  return false;
}

console.log(noTriples([1, 1, 2, 2, 1]));