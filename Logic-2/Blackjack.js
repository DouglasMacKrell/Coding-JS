// Logic-2 -- blackjack
// https://codingjs.wmcicompsci.ca/exercise.html?name=blackjack&title=Logic-2

// Peer Coded with Jenesh Napit, Software Developer Apprentice at Codecademy!
// FOLLOW JENESH!
// LINKEDIN: https://www.linkedin.com/in/jeneshnapit/
// COMPANY LINKEDIN: https://www.linkedin.com/company/mypantry/


// Given 2 int values greater than 0, return whichever value is nearest to 21 
// without going over. Return 0 if they both go over.

// Examples

// blackjack(19, 21) → 21
// blackjack(21, 19) → 21
// blackjack(19, 22) → 19

const blackjack = (a,b) => {
    if (a > 21 && b > 21){
        return 0
    } else if (a > b && a <= 21) {
        return a
    } else if (b > a && b <= 21) {
        return b
    } 
    if (a > b) {
        return b
    } else {
        return a
    }
};

console.log(blackjack(19, 21));
console.log(blackjack(21, 19));
console.log(blackjack(19, 22));
console.log(blackjack(23, 25));
console.log(blackjack(21, 21));
console.log(blackjack(22, 19));