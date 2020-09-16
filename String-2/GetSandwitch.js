// String-2 -- getSandwich
// https://codingjs.wmcicompsci.ca/exercise.html?name=getSandwich&title=String-2

// A sandwich is two pieces of bread with something in between.
// Return the string that is between the first and last appearance
// of "bread" in the given string, or return the empty string ""
// if there are not two pieces of bread.

// Examples

// getSandwich('breadjambread') → jam
// getSandwich('xxbreadjambreadyy') → jam
// getSandwich('xxbreadyy') →

function getSandwich(str) {
  //   let finder1 = str.indexOf("bread");
  //   let firstSlice = str.slice(finder1 + 5);
  //   let finder2 = firstSlice.indexOf("bread");
  //   let sandwich = "";
  //   if (finder2 >= 0) {
  //     sandwich = firstSlice.slice(0, finder2);
  //   }
  let strCopy = str;
  let sliceArr = [];
  let sandwich = "";
  let finder = strCopy.indexOf("bread");
  while (finder !== -1) {
    sliceArr.push(finder);
    strCopy = strCopy.slice(finder + 5);
    finder = strCopy.indexOf("bread");
  }
  console.log(sliceArr);
  if (sliceArr.length >= 2) {
    let multiplier = (sliceArr.length - 2) * 5;
    console.log("multiplier:", multiplier);
    let openFace = str.slice(sliceArr[0] + 5);
    sandwich = openFace.slice(0, sliceArr[sliceArr.length - 1] + multiplier);
  }
  return sandwich;
}

console.log(getSandwich("breadbreaxbread"));
