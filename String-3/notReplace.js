// String-3 -- notReplace
// https://codingjs.wmcicompsci.ca/exercise.html?name=notReplace&title=String-3

// Given a string, return a string where every appearance of the lowercase word
// "is" has been replaced with "is not". The word "is" should not be immediately
// preceeded or followed by a letter -- so for example the "is" in "this" does
// not count. (Note: Character.isLetter(char) tests if a char is a letter.)

// Examples

// notReplace('is test') → is not test
// notReplace('is-is') → is not-is not
// notReplace('This is right') → This is not right

function notReplace(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "i") {
      if (!/[a-zA-Z]/.test(str[i - 1]) || i === 0) {
        if (str[i + 1] === "s") {
          if (!/[a-zA-Z]/.test(str[i + 2]) || i + 1 === str.length - 1) {
            result += "is not";
            i += 1;
          } else {
            result += str[i];
          }
        } else {
          result += str[i];
        }
      } else {
        result += str[i];
      }
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(notReplace("is-is"));
