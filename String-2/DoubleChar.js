// String-2 -- doubleChar
// https://codingjs.wmcicompsci.ca/exercise.html?name=doubleChar&title=String-2

// Given a string, return a string where for every char
// in the original, there are two chars.

// Examples

// doubleChar('The') → TThhee
// doubleChar('AAbb') → AAAAbbbb
// doubleChar('Hi-There') → HHii--TThheerree

function doubleChar(str) {
  let splitStr = str.split("");
  let answer = "";
  for (let char of splitStr) {
    answer += char + char;
  }
  return answer;
}
