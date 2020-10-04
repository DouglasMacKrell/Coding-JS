// Warmup-2 -- stringX
// https://codingjs.wmcicompsci.ca/exercise.html?name=stringX&title=Warmup-2

// Given a string, return a version where all
// the "x" have been removed. Except an "x" at
// the very start or end should not be removed.

// Examples

// stringX('xxHxix') → xHix
// stringX('abxxxcd') → abcd
// stringX('xabxxxcdx') → xabcdx

function stringX(str) {
  let splitStr = str.split("");
  let result = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (i === 0 && i === splitStr.length - 1) {
      result.push(splitStr[i]);
      result.push(splitStr[i]);
    } else if (i === 0 || i === splitStr.length - 1) {
      result.push(splitStr[i]);
    } else if (i !== 0 || i !== splitStr.length - 1) {
      if (splitStr[i] !== "x") {
        result.push(splitStr[i]);
      }
    }
  }
  return result.join("");
}
