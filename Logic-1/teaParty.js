// Logic-1 -- teaParty
// https://codingjs.wmcicompsci.ca/exercise.html?name=teaParty&title=Logic-1

// We are having a party with amounts of tea and candy. Return the int outcome
// of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if
// both tea and candy are at least 5. However, if either tea or candy is at
// least double the amount of the other one, the party is great (2).
// However, in all cases, if either tea or candy is less than 5, the party is
// always bad (0).

// Examples

// teaParty(6, 8) → 1
// teaParty(3, 8) → 0
// teaParty(20, 6) → 2
tea >= 5 && candy >= 5;
tea >= candy * 2 || candy >= tea * 2;

function teaParty(tea, candy) {
  if (tea >= 5 && candy >= 5) {
    if (tea >= candy * 2 || candy >= tea * 2) {
      return 2;
    } else {
      return 1;
    }
  } else {
    return 0;
  }
}
