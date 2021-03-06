/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds. 

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


***********************************************************************/
// let funcTimer=(time, func)=>{
 
//   function timer(){
//     setTimeout(func, time)
//   }

//   return timer
// }
// // your code here!
// function partyFunc () {
//   console.log("Party time!")
// }
let funcTimer=(time, func)=>{
 
  
    return setTimeout(func, time)
  

  
}
// your code here!
function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"

// let res =funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"
// console.log(res())
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = funcTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}


