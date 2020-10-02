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
  let loopCounter = 0;

  if (a.length <= b.length) {
    loopCounter = a.length;
  } else {
    loopCounter = b.length;
  }

  for (let i = 0; i < loopCounter; i++) {
    endA += a[a.length - loopCounter + i].toLowerCase();
    endB += b[b.length - loopCounter + i].toLowerCase();
  }
  console.log("endA", endA);
  console.log("endB", endB);
  if (endA === endB) {
    return true;
  } else {
    return false;
  }
}

console.log(endOther("Z", "12xz"));
