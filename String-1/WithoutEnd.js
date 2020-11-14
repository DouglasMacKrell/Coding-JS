// String-1 -- withoutEnd
// https://codingjs.wmcicompsci.ca/exercise.html?name=withoutEnd&title=String-1

// Given a string, return a version without the first and last char,
// so "Hello" yields "ell". The string length will be at least 2.

// Examples

// withoutEnd('Hello') → ell
// withoutEnd('java') → av
// withoutEnd('coding') → odin

function withoutEnd(str) {
  let chopFront = str.slice(1);
  let chopEnd = chopFront.slice(0, str.length - 2);
  return chopEnd;
}
