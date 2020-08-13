// Warmup-1 -- close10
// https://codingjs.wmcicompsci.ca/exercise.html?name=close10&title=Warmup-1

// Given 2 int values, return whichever value is nearest to the 
// value 10, or return 0 in the event of a tie. Note that Math.abs(n) 
// returns the absolute value of a number.

// Examples

// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0

const close10 = (a,b) => {
    let aRemainder = 10 <= a ? a - 10 : 10 - a;
    let bRemainder = 10 <= b ? b - 10 : 10 - b;
    if (aRemainder === bRemainder) {
        return 0;
    } else if (aRemainder > bRemainder) {
        return b;
    } else {
        return a;
    }
}

console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 7));
