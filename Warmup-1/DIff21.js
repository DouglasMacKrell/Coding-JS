// Warmup-1 -- diff21
// https://codingjs.wmcicompsci.ca/exercise.html?name=diff21&title=Warmup-1

// Given an int n, return the absolute difference between 
// n and 21, except return double the absolute difference 
// if n is over 21.

// Examples

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0



const diff21 = (n) => {
    return 21 >= n ? 21 - n : (n - 21) * 2;
}

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));