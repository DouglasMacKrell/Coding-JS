// Array-2 -- findLowestIndex
// https://codingjs.wmcicompsci.ca/exercise.html?name=findLowestIndex&title=Array-2

// Return the index of the minimum value in an array.
// The input array will have at least one element in it.

// Examples

// findLowestIndex([99, 98, 97, 96, 95]) → 4
// findLowestIndex([2, 2, 0]) → 2
// findLowestIndex([1, 3, 5]) → 0

function findLowestIndex(nums) {
  let min = Infinity;
  let minIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      minIndex = i;
    }
  }
  return minIndex;
}

console.log(findLowestIndex([99, 98, 97, 96, 95]));
