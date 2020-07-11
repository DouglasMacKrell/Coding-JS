// Warmup-1 -- mixStart
// https://codingjs.wmcicompsci.ca/exercise.html?name=mixStart&title=Warmup-1

// Return true if the given string begins with 'mix', except the 'm' can 
// be anything, so 'pix', '9ix' .. all count.

// Examples

// mixStart('mix snacks') → true
// mixStart('pix snacks') → true
// mixStart('piz snacks') → false

const mixStart = (str) => {
  return str.includes("i", 1) && str.includes("x", 2) ? true : false;
}

console.log(mixStart('mix snacks'));
console.log(mixStart('pix snacks'));
console.log(mixStart('piz snacks'));
