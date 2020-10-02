// Array-3 -- seriesUp
// https://codingjs.wmcicompsci.ca/exercise.html?name=seriesUp&title=Array-3

// Given n>=0, create an array with the pattern
// {1, 1, 2, 1, 2, 3, ... 1, 2, 3 .. n}
// (spaces added to show the grouping).
// Note that the length of the array will be
// 1 + 2 + 3 ... + n, which is known to sum
// to exactly n*(n + 1)/2.

// Examples

// seriesUp(3) → 1,1,2,1,2,3
// seriesUp(4) → 1,1,2,1,2,3,1,2,3,4
// seriesUp(2) → 1,1,2

function seriesUp(n) {
  let result = [];
  if (n === 0) {
    return [];
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result.push(j + 1);
      console.log("gotcha");
    }
  }
  return result;
}

console.log(seriesUp(3));
