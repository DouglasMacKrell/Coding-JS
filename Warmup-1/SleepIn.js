// Warmup-1 -- sleepIn
// https://codingjs.wmcicompsci.ca/exercise.html?name=sleepIn&title=Warmup-1

// The parameter weekday is true if it is a weekday, and the 
// parameter vacation is true if we are on vacation. 
// We sleep in if it is not a weekday or we're on vacation. 
// Return true if we sleep in.

// Examples

// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

const sleepIn = (weekday,vacation) => {
  if (weekday && vacation) {
      return true;
  } else if (vacation) {
      return true;
  } else if (!weekday && !vacation) {
      return true;
  } else {
      return false;
  }
};

console.log(sleepIn(true, true));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(false, false));

