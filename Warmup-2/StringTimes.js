// Warmup-2 -- stringTimes
// https://codingjs.wmcicompsci.ca/exercise.html?name=stringTimes&title=Warmup-2

// Given a string and a non-negative int n, return 
// a larger string that is n copies of the original 
// string.

// Examples

// stringTimes('Hi', 2) → HiHi
// stringTimes('Hi', 3) → HiHiHi
// stringTimes('Hi', 1) → Hi

const stringTimes = (str,n) => {
    let strReturn = ""
    for (let i = 0; i < n; i++) {
        strReturn += str
    }
    return strReturn
}

console.log(stringTimes("Hi", 2));
console.log(stringTimes("Hi", 3));
console.log(stringTimes("Hi", 1));
console.log(stringTimes("Hi", 0));