// Warmup-1 -- front3
// https://codingjs.wmcicompsci.ca/exercise.html?name=front3&title=Warmup-1

// Given a string, we'll say that the front is 
// the first 3 chars of the string. If the string 
// length is less than 3, the front is whatever 
// is there. Return a new string which is 3 
// copies of the front.

// Examples

// front3('Java') → JavJavJav
// front3('Chocolate') → ChoChoCho
// front3('abc') → abcabcabc

const front3 = (str) => {
  let front = str.slice(0, 3);
  return front + front + front
}

console.log(front3('Java'));
console.log(front3('Chocolate'));
console.log(front3('abc'));