// String-2 -- starOut
// https://codingjs.wmcicompsci.ca/exercise.html?name=starOut&title=String-2

// Return a version of the given string, where for every star
// (*) in the string the star and the chars immediately to its
// left and right are gone. So "ab*cd" yields "ad" and "ab**cd"
// also yields "ad".

// Examples

// starOut('ab*cd') → ad
// starOut('ab**cd') → ad
// starOut('sm*eilly') → silly

function starOut(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === "*") {
      continue;
    } else if (str[i - 1] === "*") {
      continue;
    } else if (str[i] === "*") {
      continue;
    } else {
      result += str[i];
    }
  }
  return result;
}
