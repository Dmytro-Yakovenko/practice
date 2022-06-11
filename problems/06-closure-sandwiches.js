/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add 
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/
const sandwichMaker=()=>{
  
  let start = "One sandwich with tomato and "
  function sandwich(string){
    console.log(string)
    return start + string
  }
  return sandwich
}
// your code here!
let sandwich = sandwichMaker(); // => returns a function
let res1=sandwich("spinach") // => "One sandwich with tomato and spinach"
console.log(res1)
let res2 = sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
console.log(res2)
let res3 = sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"
console.log(res3)

let sandwich2 = sandwichMaker(); // => returns a function
console.log(sandwich2("pb") )// => "One sandwich with tomato and pb"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
