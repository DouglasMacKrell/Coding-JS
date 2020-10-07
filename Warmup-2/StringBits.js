// Warmup-2 -- stringBits
// https://codingjs.wmcicompsci.ca/exercise.html?name=stringBits&title=Warmup-2

// Given a string, return a new string made of
// every other char starting with the first,
// so "Hello" yields "Hlo".

// Examples

// stringBits('Hello') → Hlo
// stringBits('Hi') → H
// stringBits('Heeololeo') → Hello










function stringBits(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i];
    }
  }
  return result;
}

console.log(stringBits("Heeololeo"));