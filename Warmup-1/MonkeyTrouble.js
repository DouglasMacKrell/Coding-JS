// Warmup-1 -- monkeyTrouble
// https://codingjs.wmcicompsci.ca/exercise.html?name=monkeyTrouble&title=Warmup-1

// We have two monkeys, a and b, and the parameters aSmile and
// bSmile indicate if each is smiling. We are in trouble if
// they are both smiling or if neither of them is smiling.
// Return true if we are in trouble.

// Examples

// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

const monkeyTrouble = (aSmile, bSmile) => {
  return aSmile === bSmile;
};

console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));
