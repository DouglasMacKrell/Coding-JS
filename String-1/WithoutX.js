// String-1 -- withoutX
// https://codingjs.wmcicompsci.ca/exercise.html?name=withoutX&title=String-1

// Given a string, if the first or last chars are 'x',
// return the string without those 'x' chars,
// and otherwise return the string unchanged.

// Examples

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi

function withoutX(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if ((i === 0 && str[i] === "x") || (i === str.length - 1 && str[i] === "x")) {
      continue;
    } else {
      result += str[i];
    }
  }
  return result;
}
