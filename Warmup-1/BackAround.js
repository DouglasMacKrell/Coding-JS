// Warmup-1 -- backAround
// https://codingjs.wmcicompsci.ca/exercise.html?name=backAround&title=Warmup-1

// Given a string, take the last char and return 
// a new string with the last char added at the 
// front and back, so 'cat' yields 'tcatt' The 
// original string will be length 1 or more.

// Examples

// backAround('cat') → tcatt
// backAround('Hello') → oHelloo
// backAround('a') → aaa

const backAround = (str) => {
    return str[str.length - 1] + str + str[str.length - 1];
}

console.log(backAround("cat")); // tcatt
console.log(backAround("Hello")); // oHelloo
console.log(backAround("a")); // aaa

