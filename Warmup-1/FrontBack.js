// Warmup-1 -- frontBack
// https://codingjs.wmcicompsci.ca/exercise.html?name=frontBack&title=Warmup-1

// Given a string, return a new string where the first and last chars 
// have been exchanged.

// Examples
 
// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba

const frontBack = (str) => {
    let splitStr = str.split("");
    let firstChar = splitStr.shift();
    let lastChar = splitStr.pop();
    splitStr.unshift(lastChar);
    splitStr.push(firstChar);
    let newStr = splitStr.join("");
    return newStr;  
}
// const frontBack = (str) => {
//     let firstChar = str[0];
//     let lastChar = str[str.length - 1];
//     let splitStr = str.split("");
//     splitStr.shift();
//     splitStr.unshift(lastChar);
//     splitStr.pop();
//     splitStr.push(firstChar);
//     let newStr = splitStr.join("");
//     return newStr;  
// }

console.log("frontBack with Array Methods")
console.log(frontBack("code"))
console.log(frontBack("a"))
console.log(frontBack("ab"))
console.log(frontBack("Thank you for watching Going Green"))


const frontBack2 = (str) => {
    let firstChar = ""
    let lastChar = ""
    let middle = ""
    for (let i = 0; i < str.length; i++){
        if (i === 0) {
            firstChar = str[i]
        } else if (i === str.length - 1) {
            lastChar = str[i]
        } else {
            middle += str[i]
        }
    }
    return lastChar + middle + firstChar
}

console.log(" ")
console.log("frontBack without Array Methods")
console.log(frontBack2("code"))
console.log(frontBack2("a"))
console.log(frontBack2("ab"))
console.log(frontBack2("Thank you for watching Going Green"))