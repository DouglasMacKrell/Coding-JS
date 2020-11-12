// String-1 -- extraFront
// https://codingjs.wmcicompsci.ca/exercise.html?name=extraFront&title=String-1

// Given a string, return a new string made of 3 copies of the first
// 2 chars of the original string. The string may be any length.
// If there are fewer than 2 chars, use whatever is there.

// Examples

// extraFront('Hello') → HeHeHe
// extraFront('ab') → ababab
// extraFront('H') → HHH

function extraFront(str) {
  if (str.length < 3) {
    return str + str + str;
  } else {
    let front = str[0] + str[1];
    return front + front + front;
  }
}
