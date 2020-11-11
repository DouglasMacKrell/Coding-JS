// String-1 -- minCat
// https://codingjs.wmcicompsci.ca/exercise.html?name=minCat&title=String-1

// Given two strings, append them together (known as "concatenation")
// and return the result. However, if the strings are different lengths,
// omit chars from the longer string so it is the same length as the
// shorter string. So "Hello" and "Hi" yield "loHi".
// The strings may be any length.

// Examples

// minCat('Hello', 'Hi') → loHi
// minCat('Hello', 'java') → ellojava
// minCat('java', 'Hello') → javaello

function minCat(a, b) {
  if (a.length > b.length) {
    let diff = a.length - b.length;
    let sliceA = a.slice(diff);
    return sliceA + b;
  } else if (a.length < b.length) {
    let diff = b.length - a.length;
    let sliceB = b.slice(diff);
    return a + sliceB;
  } else {
    return a + b;
  }
}
