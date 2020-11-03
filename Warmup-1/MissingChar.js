// Warmup-1 -- missingChar
// https://codingjs.wmcicompsci.ca/exercise.html?name=missingChar&title=Warmup-1

// Given a non-empty string and an int n,
// return a new string where the char at index n
// has been removed. The value of n will be a valid
// index of a char in the original string
// (i.e. n will be in the range 0..str.length()-1 inclusive).

// Examples

// missingChar('kitten', 1) → ktten
// missingChar('kitten', 0) → itten
// missingChar('kitten', 4) → kittn

function missingChar(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i !== n) {
      result += str[i];
    }
  }
  return result;
}

console.log(missingChar("kitten", 1));