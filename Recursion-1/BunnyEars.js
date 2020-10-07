// Recursion-1 -- bunnyEars
// https://codingjs.wmcicompsci.ca/exercise.html?name=bunnyEars&title=Recursion-1

// We have a number of bunnies and each
// bunny has two big floppy ears. We want
// to compute the total number of ears across
// all the bunnies recursively
// (without loops or multiplication).

// Examples

// bunnyEars(0) → 0
// bunnyEars(1) → 2
// bunnyEars(2) → 4














function bunnyEars(bunnies) {
  let totalEars = 0;
  const hop2it = (vol) => {
    if (vol === 0) return;

    totalEars += 2;
    vol -= 1;
    hop2it(vol);
  };
  hop2it(bunnies);
  return totalEars;
}

console.log(bunnyEars(2));