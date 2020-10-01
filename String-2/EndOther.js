// String-2 -- endOther
// https://codingjs.wmcicompsci.ca/exercise.html?name=endOther&title=String-2

// Given two strings, return true if either of the strings
// appears at the very end of the other string,
// ignoring upper/lower case differences
// (in other words, the computation should not
// be "case sensitive").

// Note: str.toLowerCase() returns the lowercase version of a string.

// Examples

// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true

function endOther(a, b) {
  let endA = "";
  let endB = "";

  if (a.length) {
    endA =
      a[a.length - 3].toLowerCase() +
      a[a.length - 2].toLowerCase() +
      a[a.length - 1].toLowerCase();
  }

  if (b.length) {
    endB =
      b[b.length - 3].toLowerCase() +
      b[b.length - 2].toLowerCase() +
      b[b.length - 1].toLowerCase();
  }

  if (endA === endB) {
    return true;
  } else {
    return false;
  }
}

console.log(endOther("abc", "abXabc"));
