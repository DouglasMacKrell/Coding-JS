// Warmup-2 -- altPairs
// https://codingjs.wmcicompsci.ca/exercise.html?name=altPairs&title=Warmup-2

// Given a string, return a string made of the chars at indexes
// 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

// Examples

// altPairs('kitten') → kien
// altPairs('Chocolate') → Chole
// altPairs('CodingHorror') → Congrr

const altPairs = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 4 === 0) {
      if (i === str.length - 1) {
        result += str[i];
      } else {
        result += str[i] + str[i + 1];
      }
    }
  }
  return result;
};

console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));
