/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/
const arrowAvgValue=array=>{
  function avgValue(){
    return array.reduce((acc, current)=>acc+current)/array.length
  }
  return avgValue
}
// your code here!
let res1 = arrowAvgValue([10, 20]); // => 15
console.log(res1())
let res2 = arrowAvgValue([2, 3, 7]); // => 4
console.log(res2())
let res3 = arrowAvgValue([100, 60, 64]); // => 74.66666666666667
console.log(res3())
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
