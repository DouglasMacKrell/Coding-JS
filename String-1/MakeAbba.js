// String-1 -- makeAbba
// https://codingjs.wmcicompsci.ca/exercise.html?name=makeAbba&title=String-1

// Given two strings, a and b, return the result of putting them
// together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// Examples

// makeAbba('Hi', 'Bye') → HiByeByeHi
// makeAbba('Yo', 'Alice') → YoAliceAliceYo
// makeAbba('What', 'Up') → WhatUpUpWhat

function makeAbba(a, b) {
  return a + b + b + a;
}
