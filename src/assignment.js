// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

//challenge - 1
function sumOfNumbers(arrayOfNumbers) {
  let sum=arrayOfNumbers.reduce((a, b) => a+b)
  return sum
}
assignment.sumOfNumbers = sumOfNumbers


//challenge - 2
function countEvenNumbers(arrayOfNumbers) {
let evenNumbers = arrayOfNumbers.filter(n => n % 2 === 0)
  let theCountOfEvenNumbers
    =evenNumbers.length 
  return theCountOfEvenNumbers;
}
assignment.countEvenNumbers = countEvenNumbers;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================



