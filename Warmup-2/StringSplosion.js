// Warmup-2 -- stringSplosion
// https://codingjs.wmcicompsci.ca/exercise.html?name=stringSplosion&title=Warmup-2

// Given a non-empty string like "Code"
// return a string like "CCoCodCode".

// Examples










function stringSplosion(str) {
  let splodeStr = str.split("");
  let result = "";
  for (let i = 0; i < splodeStr.length; i++) {
    result += splodeStr.slice(0, i + 1).join("");
  }
  return result;
}

console.log(stringSplosion("happenstance"));
