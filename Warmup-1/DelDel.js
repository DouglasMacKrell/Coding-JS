// Warmup-1 -- delDel
// https://codingjs.wmcicompsci.ca/exercise.html?name=delDel&title=Warmup-1

// Given a string, if the string "del" appears starting
// at index 1, return a string where that "del" has been
// deleted. Otherwise, return the string unchanged.

// Examples

// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel

function delDel(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 1) {
      if (str[i] === "d" && str[i + 1] === "e" && str[i + 2] === "l") {
        i += 2;
      } else {
        result += str[i];
      }
    } else {
      result += str[i];
    }
  }
  return result;
}
