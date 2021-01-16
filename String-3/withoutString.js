// String-3 -- withoutString
// https://codingjs.wmcicompsci.ca/exercise.html?name=withoutString&title=String-3

// Given two strings, base and remove, return a version of the base string where all instances
// of the remove string have been removed (not case sensitive). You may assume that the remove
// string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing
// "xx" leaves "x".

// Examples

// withoutString('Hello there', 'llo') → He there
// withoutString('Hello there', 'e') → Hllo thr
// withoutString('Hello there', 'x') → Hello there

function withoutString(base, remove) {
  let removeLength = remove.length;
  let checkBase = base.toLowerCase();
  let checkRemove = remove.toLowerCase();
  let result = "";
  for (let i = 0; i < base.length; i++) {
    if (removeLength === 1) {
      if (checkBase[i] === checkRemove) {
        continue;
      } else {
        result += base[i];
      }
    } else {
      let removeMatch = true;
      for (let j = 0; j < remove.length; j++) {
        if (checkBase[i + j] === checkRemove[j]) {
          continue;
        } else {
          removeMatch = false;
          break;
        }
      }
      if (removeMatch) {
        i += removeLength - 1;
      } else {
        result += base[i];
      }
    }
  }
  return result;
}

console.log(withoutString("Hello there", "llo"));
console.log(withoutString("Hello there", "e"));
