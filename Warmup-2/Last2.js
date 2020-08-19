// Warmup-2 -- last2
// Given a string, return the count of the number of times that
// a substring length 2 appears in the string and also as the
// last 2 chars of the string, so "hixxxhi" yields 1
// (we won't count the end substring).

// Examples

// last2('hixxhi') → 1
// last2('xaxxaxaxx') → 1
// last2('axxaaxx') → 1

function last2(str) {
  let lastTwo = str.slice(str.length - 2);
  let testLetters = "";
  let counter = 0;
  for (let i = 0; i < str.length - 2; i++) {
    testLetters = str[i] + str[i + 1];
    if (testLetters === lastTwo) {
      counter++;
    }
  }
  return counter;
}

console.log(last2("hixxhi")); // 1
console.log(last2("xaxxaxaxx")); // 1
console.log(last2("axxaaxx")); // 1
