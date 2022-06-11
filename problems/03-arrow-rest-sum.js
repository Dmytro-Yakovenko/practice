/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/
const arrowRestSum=(...array)=>{
  function sum(){
return array.reduce((acc, current)=>acc+current)
  }
  return sum
}
// your code here!
let result1 = arrowRestSum(3,5,6); // => 14
console.log(result1())
let result2=arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
console.log(result2())

  let result3=arrowRestSum(0); // => 0
  console.log(result3())
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}
