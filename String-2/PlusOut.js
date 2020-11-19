// String-2 -- plusOut
// https://codingjs.wmcicompsci.ca/exercise.html?name=plusOut&title=String-2

// Given a string and a non-empty word string,
// return a version of the original String where all
// chars have been replaced by pluses ("+"),
// except for appearances of the word string
// which are preserved unchanged.

// Examples

// plusOut('12xy34', 'xy') → ++xy++
// plusOut('12xy34', '1') → 1+++++
// plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy

function plusOut(str, word) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word[0]) {
      let wordCheck = true;
      let tempWord = "";
      for (let j = 0; j < word.length; j++) {
        if (str[i + j] === word[j]) {
          tempWord += word[j];
        } else {
          wordCheck = false;
          break;
        }
      }
      if (wordCheck) {
        result += tempWord;
        i += word.length - 1;
      } else {
        result += "+";
      }
    } else {
      result += "+";
    }
  }
  return result;
}
