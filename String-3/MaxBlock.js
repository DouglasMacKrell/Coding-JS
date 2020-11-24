// String-3 -- maxBlock
// https://codingjs.wmcicompsci.ca/exercise.html?name=maxBlock&title=String-3

// Given a string, return the length of the largest "block"
// in the string. A block is a run of adjacent chars that are the same.

// Examples

// maxBlock('hoopla') → 2
// maxBlock('abbCCCddBBBxx') → 3
// maxBlock('') → 0

function maxBlock(str) {
  let checkObj = {};
  if (str.length < 1) {
    return 0;
  }
  for (let i = 0; i < str.length; i++) {
    if (checkObj[str[i]]) {
      checkObj[str[i]] += 1;
    } else {
      checkObj[str[i]] = 1;
    }
  }
  let max = -Infinity;
  for (let char in checkObj) {
    if (checkObj[char] > max) {
      max = checkObj[char];
    }
  }
  return max;
}
