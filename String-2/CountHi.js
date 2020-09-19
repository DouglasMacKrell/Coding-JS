// String-2 -- countHi
// https://codingjs.wmcicompsci.ca/exercise.html?name=countHi&title=String-2

// Return the number of times that the string "hi"
// appears anywhere in the given string.

// Examples

// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2












function countHi(str) {
  let hiCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1) {
      let hiCheck = str[i] + str[i + 1];
      if (hiCheck === "hi") {
        hiCount += 1;
      }
    }
  }
  return hiCount;
}
