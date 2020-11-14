// String-1 -- startWord
// https://codingjs.wmcicompsci.ca/exercise.html?name=startWord&title=String-1

// Given a string and a second "word" string, we'll say that the word
// matches the string if it appears at the front of the string, except
// its first char does not need to match exactly. On a match, return
// the front of the string, or otherwise return the empty string.
// So, so with the string "hippo" the word "hi" returns "hi" and
// "xip" returns "hip". The word will be at least length 1.

// Examples

// startWord('hippo', 'hi') → hi
// startWord('hippo', 'xip') → hip
// startWord('hippo', 'i') → h

function startWord(str, word) {
  let result = "";
  if (word.length === 1) {
    return str[0];
  } else if (str.length === "") {
    return result;
  }
  for (let i = 1; i < word.length; i++) {
    if (str[i] !== word[i]) {
      return result;
    }
  }
  result = str.slice(0, word.length);
  return result;
}
