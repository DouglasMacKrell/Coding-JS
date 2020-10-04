// String-3 -- countYZ
// https://codingjs.wmcicompsci.ca/exercise.html?name=countYZ&title=String-3

// Given a string, count the number of words
// ending in 'y' or 'z' -- so the 'y' in "heavy"
// and the 'z' in "fez" count, but not the 'y'
// in "yellow" (not case sensitive).
// We'll say that a y or z is at the end of a
// word if there is not an alphabetic letter
// immediately following it.
// (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

// Examples

// countYZ('fez day') → 2
// countYZ('day fez') → 2
// countYZ('day fyyyz') → 2

function countYZ(str) {
  let counter = 0;
  let letters = /^[A-Za-z]+$/;
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(letters)) {
      if (
        str[i - 1] === "y" ||
        str[i - 1] === "Y" ||
        str[i - 1] === "z" ||
        str[i - 1] === "Z"
      ) {
        counter += 1;
      }
    } else if (i === str.length - 1) {
      if (
        str[i] === "y" ||
        str[i] === "Y" ||
        str[i] === "z" ||
        str[i] === "Z"
      ) {
        counter += 1;
      }
    }
  }
  return counter;
}
