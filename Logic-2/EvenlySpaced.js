// Logic-2 -- evenlySpaced
// https://codingjs.wmcicompsci.ca/exercise.html?name=evenlySpaced&title=Logic-2

// Given three ints, a b c, one of them is small,
// one is medium and one is large.
// Return true if the three values are evenly spaced,
// so the difference between small and medium
// is the same as the difference between medium and large.

// Examples

// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

// DOUG PLAN

// - figure out which is large, medium, and small
// - find remainder
//     M - S & L - M
// - if remainders match - return true

function evenlySpaced(a, b, c) {
  let large = 0;
  let medium = 0;
  let small = 0;
  if (a > b && b > c) {
    large = a;
    medium = b;
    small = c;
  } else if (a > c && c > b) {
    large = a;
    medium = c;
    small = b;
  } else if (b > a && a > c) {
    large = b;
    medium = a;
    small = c;
  } else if (b > c && c > a) {
    large = b;
    medium = c;
    small = a;
  } else if (c > a && a > b) {
    large = c;
    medium = a;
    small = b;
  } else {
    large = c;
    medium = b;
    small = a;
  }
  let diff1 = large - medium;
  let diff2 = medium - small;
  if (diff1 === diff2) {
    return true;
  }
  return false;
}

console.log(evenlySpaced(2, 4, 6));
console.log(evenlySpaced(4, 6, 3));

const evenlySpaced2 = (a, b, c) => {
  let unsorted = [a, b, c];
  let sorted = unsorted.sort();
  let small = sorted[0];
  let medium = sorted[1];
  let large = sorted[2];
  let diff1 = large - medium;
  let diff2 = medium - small;
  if (diff1 === diff2) {
    return true;
  }
  return false;
};

console.log(evenlySpaced2(2, 4, 6));
