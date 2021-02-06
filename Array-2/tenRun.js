// Array-2 -- tenRun
// https://codingjs.wmcicompsci.ca/exercise.html?name=tenRun&title=Array-2

// For each multiple of 10 in the given array, change all the values following
// it to be that multiple of 10, until encountering another multiple of 10.
// So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

// Examples

// tenRun([2, 10, 3, 4, 20, 5]) → 2,10,10,10,20,20
// tenRun([10, 1, 20, 2]) → 10,10,20,20
// tenRun([10, 1, 9, 20]) → 10,10,10,20

function tenRun(nums) {
  let result = [];
  let check = 10;
  let fill = 10;
  let spam = false;
  for (let i = 0; i < nums.length; i++) {
    if (spam) {
      if (nums[i] === check) {
        check += 10;
        fill = check;
        result.push(fill);
      } else {
        result.push(fill);
      }
    } else {
      if (nums[i] === check) {
        result.push(check);
        check += 10;
        spam = true;
      } else {
        result.push(nums[i]);
      }
    }
  }
  return result;
}
