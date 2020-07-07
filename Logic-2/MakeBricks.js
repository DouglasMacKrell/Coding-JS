// Logic-2 -- makeBricks
// https://codingjs.wmcicompsci.ca/exercise.html?name=makeBricks&title=Logic-2

// Peer Coded with Jenesh Napit, Software Developer Apprentice at Codecademy!
// FOLLOW JENESH!
// LINKEDIN: https://www.linkedin.com/in/jeneshnapit/
// COMPANY LINKEDIN: https://www.linkedin.com/company/mypantry/


// We want to make a row of bricks that is goal inches long. 
// We have a number of small bricks (1 inch each) and big bricks 
// (5 inches each). Return true if it is possible to make the goal 
// by choosing from the given bricks. 
// This is a little harder than it looks and can be done without 
// any loops. See also: Introduction to MakeBricks

// Examples

// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

const makeBricks = (small,big,goal) => {
  let smallBrick = small;
  let bigBrick = big * 5;
  if (smallBrick + bigBrick === goal) {
      return true;
  } else {
      return false;
  }
};

console.log(makeBricks(3, 1, 8));
console.log(makeBricks(3, 1, 9));
