// Logic-2 -- roundSum
// https://codingjs.wmcicompsci.ca/exercise.html?name=roundSum&title=Logic-2

// For this problem, we'll round an int value
// up to the next multiple of 10
// if its rightmost digit is 5 or more,
// so 15 rounds up to 20.
// Alternately, round down to the previous
// multiple of 10 if its rightmost digit
// is less than 5, so 12 rounds down to 10.
// Given 3 ints, a b c, return the sum of their
// rounded values.
// To avoid code repetition, write a separate helper
// "public int round10(int num) {"
// and call it 3 times.
// Write the helper entirely below and at
// the same indent level as roundSum().

// Examples

// roundSum(16, 17, 18) → 60
// roundSum(12, 13, 14) → 30
// roundSum(6, 4, 4) → 10

function roundSum(a, b, c) {
  let input = [a, b, c];
  let roundInt = (acc, curr) => {
    let strCurr = curr.toString();
    let lastNum = strCurr[strCurr.length - 1];
    if (Number(lastNum) < 5) {
      let roundedDown = curr - Number(lastNum);
      return (acc += roundedDown);
    } else {
      let remainder = 10 - Number(lastNum);
      let roundedUp = curr + remainder;
      return (acc += roundedUp);
    }
  };
  return input.reduce(roundInt, 0);
}

console.log(roundSum(16, 17, 18));
console.log(roundSum(12, 13, 14));
console.log(roundSum(6, 4, 4));
