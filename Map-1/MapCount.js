// Map-1 -- mapCount
// https://codingjs.wmcicompsci.ca/exercise.html?name=mapCount&title=Map-1

// Given a map, count how many of the keys "a", "b" and "c" are part of the map.
// Return the result as an integer.

// Examples

// Note that the displayed Map syntax has been simplified for user readability,
// but would not actually create a Map() properly.

// mapCount({'a': 'aaa', 'b': 'bb', 'c': 'cake'}) → 3
// mapCount({'yogurt': 'salt', 'bread': 'butter'}) → 0
// mapCount({'a': 'aa', 'b': 'bbb'}) → 2

function mapCount(someMap) {
  let answer = 0;
  for (let key in someMap) {
    if (key === "a" || key === "b" || key === "c") {
      answer += 1;
    }
  }
  return answer;
}
