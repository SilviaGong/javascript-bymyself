//1. user input
let num = +prompt('please enter a number:');//+ means convert the input information to number 
//2.print out the result
console.log(num % 4 === 0 && num % 100 !== 0);