// Warmup-1 -- stringE
// https://codingjs.wmcicompsci.ca/exercise.html?name=stringE&title=Warmup-1

// Return true if the given string
// contains between 1 and 3 'e' chars.

// Examples

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str) {
  let counter = 0;
  for (let char of str) {
    if (char === "e") {
      counter += 1;
    }
  }
  if (counter > 3 || counter === 0) {
    return false;
  } else {
    return true;
  }
}
