// Array-1 -- frontPiece
// https://codingjs.wmcicompsci.ca/exercise.html?name=frontPiece&title=Array-1

// Given an int array of any length, 
// return a new array of its first 2 
// elements. If the array is smaller 
// than length 2, use whatever 
// elements are present.

// Examples

// frontPiece([1, 2, 3]) → 1,2
// frontPiece([1, 2]) → 1,2
// frontPiece([1]) → 1

function frontPiece(nums){
  if (nums[1]) {
      let result = [nums[0], nums[1]]
      return result
  } else {
      return nums
  }
}