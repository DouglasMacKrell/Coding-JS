// String-2 -- xyzThere
// https://codingjs.wmcicompsci.ca/exercise.html?name=xyzThere&title=String-2

// Return true if the given string contains an appearance of "xyz"
// where the xyz is not directly preceeded by a period (.). So "xxyz"
// counts but "x.xyz" does not.

// Examples

// xyzThere('abcxyz') → true
// xyzThere('abc.xyz') → false
// xyzThere('xyz.abc') → true

function xyzThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      if (str[i - 1] !== ".") {
        if (str[i + 1] === "y" && str[i + 2] === "z") {
          return true;
        }
      }
    }
  }
  return false;
}
