// String-1 -- withoutX2
// https://codingjs.wmcicompsci.ca/exercise.html?name=withoutX2&title=String-1

// Given a string, if one or both of the first 2 chars is 'x',
// return the string without those 'x' chars, and otherwise return
// the string unchanged. This is a little harder than it looks.

// Examples

// withoutX2('xHi') → Hi
// withoutX2('Hxi') → Hi
// withoutX2('Hi') → Hi

function withoutX2(str) {
  let found1 = false;
  let found2 = false;
  if (str[0] === "x") {
    found1 = true;
  }
  if (str[1] === "x") {
    found2 = true;
  }
  if (found1 && found2) {
    return str.slice(2);
  } else if (found1) {
    return str.slice(1);
  } else if (found2) {
    let front = str[0];
    let back = str.slice(2);
    return front + back;
  } else {
    return str;
  }
}
