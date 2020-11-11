// String-1 -- extraEnd
// https://codingjs.wmcicompsci.ca/exercise.html?name=extraEnd&title=String-1

// Given a string, return a new string made of 3 copies
// of the last 2 chars of the original string. The string
// length will be at least 2.

// Examples

// extraEnd('Hello') → lololo
// extraEnd('ab') → ababab
// extraEnd('Hi') → HiHiHi

function extraEnd(str) {
  let end = str[str.length - 2] + str[str.length - 1];
  return end + end + end;
}
