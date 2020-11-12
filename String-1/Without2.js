// String-1 -- without2
// https://codingjs.wmcicompsci.ca/exercise.html?name=without2&title=String-1

// Given a string, if a length 2 substring appears at both
// its beginning and end, return a string without the substring
// at the beginning, so "HelloHe" yields "lloHe". The substring
// may overlap with itself, so "Hi" yields "". Otherwise,
// return the original string unchanged.

// Examples

// without2('HelloHe') → lloHe
// without2('HelloHi') → HelloHi
// without2('Hi') →

function without2(str) {
  if (str === "") {
    return "";
  } else if (str.length === 1) {
    return str;
  } else if (str.slice(0, 2) === str.slice(str.length - 2)) {
    return str.slice(2);
  } else {
    return str;
  }
}
