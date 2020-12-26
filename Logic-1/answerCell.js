// Logic-1 -- answerCell
// https://codingjs.wmcicompsci.ca/exercise.html?name=answerCell&title=Logic-1

// Your cell phone rings. Return true if you should answer it. Normally you answer,
// except in the morning you only answer if it is your mom calling. In all cases,
// if you are asleep, you do not answer.

// Examples

// answerCell(false, false, false) → true
// answerCell(false, false, true) → false
// answerCell(true, false, false) → false

function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep) {
    return false;
  } else if (isMorning) {
    if (isMom) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
