// String-1 -- hasBad
// https://codingjs.wmcicompsci.ca/exercise.html?name=hasBad&title=String-1

// Given a string, return true if "bad" appears starting at index
// 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not
// "xxbadxx". The string may be any length, including 0.

// Examples

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false

function hasBad(str) {
  if (str.length < 3) {
    return false;
  } else if (str.indexOf("bad") === 0 || str.indexOf("bad") === 1) {
    return true;
  } else {
    return false;
  }
}
