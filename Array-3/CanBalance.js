// Array-3 -- canBalance
// https://codingjs.wmcicompsci.ca/exercise.html?name=canBalance&title=Array-3

// Given a non-empty array, return true if there
// is a place to split the array so that the sum
// of the numbers on one side is equal to the sum
// of the numbers on the other side.

// Examples

// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true











function canBalance(nums) {
  let leftSum = 0;
  let rightSum = 0;

  const findSum = (arr) => {
    let total = 0;
    for (let num of arr) {
      total += num;
    }
    return total;
  };

  for (let i = 0; i < nums.length; i++) {
    let leftArr = nums.slice(0, i + 1);
    let rightArr = nums.slice(i + 1, nums.length);
    console.log("leftArr", leftArr);
    console.log("rightArr", rightArr);
    leftSum = findSum(leftArr);
    rightSum = findSum(rightArr);
    if (leftSum === rightSum) {
      return true;
    } else {
      console.log("nope");
    }
  }
  return false;
}

console.log(canBalance([1, 1, 1, 2, 1]));
