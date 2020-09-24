// String-2 -- sameStarChar
// https://codingjs.wmcicompsci.ca/exercise.html?name=sameStarChar&title=String-2

// Returns true if for every '*' (star) in the string,
// if there are chars both immediately before and after
// the star, they are the same.

// Examples

// sameStarChar('xy*yzz') → true
// sameStarChar('xy*zzz') → false
// sameStarChar('*xa*az') → true









function sameStarChar(str) {
  let isSame = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      if (i === 0) {
        isSame = true;
      } else if (i === str.length - 1) {
        isSame = true;
      } else if (str[i - 1] === str[i + 1]) {
        isSame = true;
      } else if (str[i - 1] !== str[i + 1]) {
        isSame = false;
        return isSame;
      }
    }
  }
  return isSame;
}
