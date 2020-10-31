// Warmup-1 -- notString
// https://codingjs.wmcicompsci.ca/exercise.html?name=notString&title=Warmup-1

// Given a string, return a new string where "not "
// has been added to the front.
// However, if the string already begins with
// "not", return the string unchanged.

// Examples

// notString('candy') → not candy
// notString('x') → not x
// notString('not bad') → not bad

function notString(str) {
  if (str[0] === "n" && str[1] === "o" && str[2] === "t") {
    return str;
  } else {
    let smoosh = [];
    smoosh.push("not ");
    smoosh.push(str);
    return smoosh.join("");
  }
}
