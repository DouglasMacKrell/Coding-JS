// Warmup-1 -- or35
// https://codingjs.wmcicompsci.ca/exercise.html?name=or35&title=Warmup-1

// Return true if the given non-negative number is a multiple 
// of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)

// Examples

// or35(3) → true
// or35(10) → true
// or35(8) → false

const or35 = (n) => {
  return n % 3 === 0 || n % 5 === 0 ? true : false;
}

console.log(or35(3))
console.log(or35(10))
console.log(or35(8))