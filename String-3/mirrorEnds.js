// String-3 -- mirrorEnds
// https://codingjs.wmcicompsci.ca/exercise.html?name=mirrorEnds&title=String-3

// Given a string, look for a mirror image (backwards) string at both the beginning
// and end of the given string. In other words, zero or more characters at the very
// begining of the given string, and at the very end of the string in reverse order
// (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

// Examples

// mirrorEnds('abXYZba') → ab
// mirrorEnds('abca') → a
// mirrorEnds('aba') → aba

function mirrorEnds(string) {
  let result = "";
  let ind = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[ind] === string[i]) {
      result += string[i];
      ind += 1;
    } else {
      break;
    }
  }
  return result;
}
