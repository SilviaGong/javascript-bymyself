/* // count usage
let num = 1;
// num = num + 1;
// take assignment operator
// num += 3;
console.log(num);

// 1.Prefix auto-increment
// let i = 1;
// ++i;   //
// console.log(i);

// let i = 1
// console.log(++i + 1)


// // 2.post-increment
// let i = 1;
// i++;   //
// console.log(i);
// let i = 1
// console.log(i++ + 1)

let i = 1
console.log(i++ + ++i + i)
 */

const school = [
  ["science", "computer", "art"],
  ["Jones", "Willoughby", "Rhodes"]
];
school[0].push("dance")
school[1].unshift('Holmes')
console.log(school);