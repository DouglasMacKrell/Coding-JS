// Logic-2 -- makeBricks
// https://codingjs.wmcicompsci.ca/exercise.html?name=makeBricks&title=Logic-2

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
    let smallBricks = small;
    let largeBricks = big * 5;
    if (largeBricks >= goal) {
      if (goal % 5 <= smallBricks) {
        return true;
      }
    } else if (goal - largeBricks <= smallBricks){
      return true;
    } 
//     if (smallBricks + largeBricks === goal) {
//         return true;
//     } else if (smallBricks >= goal) {
//         return true;
//     } else if (largeBricks === goal) {
//         return true;
//     } 
//     for (let i = big; i > 0; i--) {
//         if ((i * 5) >= goal) {
//             if (goal % 5 <= smallBricks){
//               return true;
//             } 
//         } else if (goal - (i * 5) <= smallBricks) {
//             return true;
//         }
//     }
    return false;
};

console.log(makeBricks(3, 1, 8));
console.log(makeBricks(3, 1, 9));
console.log(makeBricks(3, 2, 10));




// function makeBricks(small,big,goal){  
//     if (Math.floor(goal / 5) <= big) {    
//         return small >= goal % 5;  
//     }  
//     return small >= goal - (big * 5);
// }