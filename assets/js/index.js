"use strict";

// const sum = function (a, b) {
//   return a + b;
// };

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(3, 5));

//function test() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// test(1, 2, 3, 4, 5);

// const test = () => {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// };
// test(1, 2, 3, 4, 5);

// function test() {
//   console.log(this);
// }

// const getSum = () => {
//   console.log(this);
// };

// test();

// getSum();

// let stu = {
//   name: "Ilham",
//   surname: "Abasli",
//   age: 20,
//   fullName: () => {
//     console.log(this);
//   },
//   fullData: function () {
//     console.log(this);
//   },
// };

// stu.fullData();

// document.querySelector("button").addEventListener("click", function () {
//   console.log(this);
// });

// let elems = document.querySelectorAll("ul li");

// elems.forEach((elem) => {
//   elem.addEventListener("click", function () {
//     console.log(this.innetText);
//   });
// });

// function showResult(num1, num2) {
//   let str = "Your result : ";
//   let res = sum(num1, num2);
//   console.log(str + " " + res);
// }

// function sum(a, b) {
//   return a + b;
// }

// showResult(3, 7);

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// function showNums(firstNum) {
//   console.log(firstNum);
//   let nextNum = firstNum - 1;
//   if (nextNum > 0) {
//     showNums(nextNum);
//   }
// }
// showNums(5);

// function getFactorial(num) {
//   let nextNum = num - 1;
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * getFactorial(nextNum);
// }

// console.log(getFactorial(5));

// function sumOddNums(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     if (item % 2 === 1) {
//       sum += item;
//     }
//   }
//   return sum;
// }

// let nums = [1, 2, 3, 4, 5, 6];
// console.log(sumOddNums(nums));

// function sumEvenNums(arr) {
//     let sum = 0;
//     for (const item of arr) {
//       if (item % 2 === 0) {
//         sum += item;
//       }
//     }
//     return sum;
//   }

//   let nums = [1, 2, 3, 4, 5, 6];
//   console.log(sumEvenNums(nums));

// function sumOdd(item) {
//   return item % 2 == 1;
// }

// function sumNums(arr, callback) {
//   let sum = 0;
//   for (const item of arr) {
//     if (callback(item)) {
//       sum += item;
//     }
//   }
//   return sum;
// }

// let nums = [1, 2, 3, 4, 5, 6];
// console.log(sumNums(nums, sumOdd));

// let result = nums.filter(m=>m>3)

// console.log(result);
