// Logic-2 -- loneSum
// https://codingjs.wmcicompsci.ca/exercise.html?name=loneSum&title=Logic-2

// Given 3 int values, a b c, return their sum.
// However, if one of the values is the same as
// another of the values, it does not count
// towards the sum.

// Examples

// loneSum(1, 2, 3) → 6
// loneSum(3, 2, 3) → 2
// loneSum(3, 3, 3) → 0



















function loneSum(a, b, c) {
  let output = [];
  if (a === b && b === c) {
    output.push(0);
  } else if (a !== b && b === c) {
    output.push(a);
  } else if (a !== b && a === c) {
    output.push(b);
  } else if (a === b && a !== c) {
    output.push(c);
  } else if (a !== b && a !== c) {
    output.push(a);
    output.push(b);
    output.push(c);
  }
  const sum = (acc, curr) => {
    return (acc += curr);
  };
  return output.reduce(sum, 0);
}

console.log(loneSum(1, 2, 3));
console.log(loneSum(3, 2, 3));
console.log(loneSum(3, 3, 3));
