// String-1 -- firstHalf
// https://codingjs.wmcicompsci.ca/exercise.html?name=firstHalf&title=String-1

// Given a string of even length, return the first half.
// So the string "WooHoo" yields "Woo".

// Examples

// firstHalf('WooHoo') → WooHoo
// firstHalf('HelloThere') → HelloThere
// firstHalf('abcdefg') → abcdefg

function firstHalf(str) {
  let result = str.slice(0, Math.floor(str.length / 2));
  return result;
}
