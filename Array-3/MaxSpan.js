Array-3 -- maxSpan
https://codingjs.wmcicompsci.ca/exercise.html?name=maxSpan&title=Array-3

Consider the leftmost and righmost appearances of some value 
in an array. We'll say that the "span" is the number of elements 
between the two inclusive. A single value has a span of 1. 
Returns the largest span found in the given array. 
(Efficiency is not a priority.)

Examples

maxSpan([1, 2, 1, 1, 3]) → 4
maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6


function maxSpan(nums){
  let spanFinder = {}
  let max = 0
  for (let number of nums) {
      if (spanFinder[number]) {
          spanFinder[number] = 1
      } else {
          spanFinder[number] = 1
      }
  }

}