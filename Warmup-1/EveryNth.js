// Warmup-1 -- everyNth
// https://codingjs.wmcicompsci.ca/exercise.html?name=everyNth&title=Warmup-1

// Given a non-empty string and an int N,
// return the string made starting with char 0,
// and then every Nth char of the string.
// So if N is 3, use char 0, 3, 6, ... and so on.
// N is 1 or more.

// Examples

// everyNth('Miracle', 2) → Mrce
// everyNth('abcdefg', 2) → aceg
// everyNth('abcdefg', 3) → adg

function everyNth(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % n === 0) {
      result += str[i];
    }
  }
  return result;
}
