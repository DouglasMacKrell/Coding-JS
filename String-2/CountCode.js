// String-2 -- countCode
// https://codingjs.wmcicompsci.ca/exercise.html?name=countCode&title=String-2

// Return the number of times that the string "code"
// appears anywhere in the given string,
// except we'll accept any letter for the 'd',
// so "cope" and "cooe" count.

// Examples

// countCode('aaacodebbb') → 1
// countCode('codexxcode') → 2
// countCode('cozexxcope') → 2

function countCode(str) {
  let codeCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "c" && str[i + 1] === "o" && str[i + 3] === "e") {
      codeCounter += 1;
    }
  }
  return codeCounter;
}
