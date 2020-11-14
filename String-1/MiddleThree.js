// String-1 -- middleThree
// https://codingjs.wmcicompsci.ca/exercise.html?name=middleThree&title=String-1

// Given a string of odd length, return the string length 3 from
// its middle, so "Candy" yields "and". The string length will
// be at least 3.

// Examples

// middleThree('Candy') → and
// middleThree('and') → and
// middleThree('solving') → lvi

function middleThree(str) {
  let middle = Math.floor(str.length / 2);
  let front = middle - 1;
  let back = middle + 1;
  return str[front] + str[middle] + str[back];
}
