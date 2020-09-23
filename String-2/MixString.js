// String-2 -- mixString
// https://codingjs.wmcicompsci.ca/exercise.html?name=mixString&title=String-2

// Given two strings, a and b, create a bigger string
// made of the first char of a, the first char of b,
// the second char of a, the second char of b, and so on.
// Any leftover chars go at the end of the result.

// Examples

// mixString('abc', 'xyz') → axbycz
// mixString('Hi', 'There') → HTihere
// mixString('xxxx', 'There') → xTxhxexre

function mixString(a, b) {
  let stack = [];
  let arrA = a.split("");
  let arrB = b.split("");
  let stackCount = arrA.length + arrB.length;
  const blender = (arr1, arr2) => {
    if (stack.length === stackCount) {
      return;
    }
    if (arrA.length !== 0) {
      stack.push(arr1.shift());
    }
    if (arrB.length !== 0) {
      stack.push(arr2.shift());
    }
    blender(arr1, arr2);
  };
  blender(arrA, arrB);
  return stack.join("");
}

console.log(mixString("abc", "xyz"));
