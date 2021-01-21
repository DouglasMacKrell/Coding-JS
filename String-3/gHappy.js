// String-3 -- gHappy
// https://codingjs.wmcicompsci.ca/exercise.html?name=gHappy&title=String-3

// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g'
// immediately to its left or right. Return true if all the g's in the given string
// are happy.

// Examples

// gHappy('xxggxx') → true
// gHappy('xxgxx') → false
// gHappy('xxggyygxx') → false

function gHappy(str) {
  let happyCheck = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "g") {
      if (i === 0) {
        if (str[i + 1] !== "g") {
          happyCheck = false;
        }
      } else if (i === str.length - 1) {
        if (str[i - 1] !== "g") {
          happyCheck = false;
        }
      } else {
        let left = false;
        let right = false;
        if (str[i - 1] === "g") {
          left = true;
        }
        if (str[i + 1] === "g") {
          left = true;
        }
        if (!left && !right) {
          happyCheck = false;
        }
      }
    }
  }
  return happyCheck;
}
