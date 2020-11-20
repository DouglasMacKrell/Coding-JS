// String-2 -- bobThere
// https://codingjs.wmcicompsci.ca/exercise.html?name=bobThere&title=String-2

// Return true if the given string contains a "bob" string,
// but where the middle 'o' char can be any char.

// Examples

// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false

function bobThere(str) {
  let result = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "b" && str[i + 2] === "b") {
      result = true;
    }
  }
  return result;
}
