// Warmup-1 -- startOz
// https://codingjs.wmcicompsci.ca/exercise.html?name=startOz&title=Warmup-1

// Given a string, return a string made of the 
// first 2 chars (if present), however include 
// first char only if it is 'o' and include the 
// second only if it is 'z', so 'ozymandias' 
// yields 'oz'.

// Examples

// startOz('ozymandias') → oz
// startOz('bzoo') → z
// startOz('oxx') → o

const startOz = (str) => {
    let firstTwo = "";
    if (str[0]) {
        if (str[0].toLowerCase() === "o") {
            firstTwo += str[0];
        }
    }
    if (str[1]) {
        if (str[1].toLowerCase() === 'z') {
            firstTwo += str[1];
        }
    }
    return firstTwo;
}

console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx"));
console.log(startOz("OZymanDIas"));
console.log(startOz("o"));
console.log(startOz(""));