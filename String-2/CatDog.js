// String-2 -- catDog
// https://codingjs.wmcicompsci.ca/exercise.html?name=catDog&title=String-2

// Return true if the string "cat" and "dog"
// appear the same number of times in the
// given string.

// Examples

// catDog('catdog') → true
// catDog('catcat') → false
// catDog('1cat1cadodog') → true

function catDog(str) {
  let catCounter = 0;
  let dogCounter = 0;
  for (let i = 0; i < str.length; i++) {
    let check = str[i] + str[i + 1] + str[i + 2];
    if (check === "cat") {
      catCounter += 1;
    } else if (check === "dog") {
      dogCounter += 1;
    }
  }
  if (catCounter === dogCounter) {
    return true;
  } else {
    return false;
  }
}
