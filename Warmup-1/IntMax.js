// Warmup-1 -- intMax
// https://codingjs.wmcicompsci.ca/exercise.html?name=intMax&title=Warmup-1

// Given three int values, a b c, return 
// the largest.

// Examples

// intMax(1, 2, 3) → 3
// intMax(1, 3, 2) → 3
// intMax(3, 2, 1) → 3

const intMax = (a, b, c) => {
    let inputArr = [a, b, c];
    let sortArr = inputArr.sort((a, b) => a - b);
    return sortArr[sortArr.length - 1];
}

console.log(intMax(1, 2, 3)); 
console.log(intMax(1, 3, 2));
console.log(intMax(3, 2, 1));
console.log(intMax(-2, -1, -3));
console.log(intMax(5, 5, 5));

