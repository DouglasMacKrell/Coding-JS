// Logic-2 -- makeChocolate
// https://codingjs.wmcicompsci.ca/exercise.html?name=makeChocolate&title=Logic-2

// We want make a package of goal kilos of chocolate.
// We have small bars (1 kilo each) and big bars (5 kilos each).
// Return the number of small bars to use,
// assuming we always use big bars before small bars.
// Return -1 if it can't be done.

// Examples

// makeChocolate(4, 1, 9) → 4
// makeChocolate(4, 1, 10) → -1
// makeChocolate(4, 1, 7) → 2

const makeChocolate = (small, big, goal) => {
  let largeBricks = big * 5;
  if (largeBricks === goal) {
    return 0;
  } else if (largeBricks < goal) {
    return goal - largeBricks <= small ? goal - largeBricks : -1;
  } else {
    if (largeBricks % goal === 0) {
      return 0;
    } else if (goal < 5) {
      return goal <= small ? goal : -1;
    } else if (goal < 10) {
      let difference = 5 - goal;
      return difference <= small ? difference : -1;
    } else {
      let remainder = Math.floor((goal / largeBricks) * 10);
      return remainder <= small ? remainder : -1;
    }
  }
};

console.log(makeChocolate(4, 1, 9));
console.log(makeChocolate(4, 1, 10));
console.log(makeChocolate(4, 1, 7));

console.log(Math.floor((9 / 20) * 10));

console.log(9 / 20);
