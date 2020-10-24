// Warmup-1 -- front22
// https://codingjs.wmcicompsci.ca/exercise.html?name=front22&title=Warmup-1

// Given a string, take the first 2 chars and return
// the string with the 2 chars added at both the front
// and back, so 'kitten' yields 'kikittenki' chars are there.

// Examples

// front22('kitten') → kikittenki
// front22('Ha') → HaHaHa
// front22('abc') → ababcab

function front22(str) {
  if (str.length === 0) {
    return "";
  } else if (str.length === 1) {
    return str + str + str;
  } else {
    let result = str[0] + str[1] + str + str[0] + str[1];
    return result;
  }
}
