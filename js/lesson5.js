// setTimeout(function () {
//   console.log("A");
//   setTimeout(function () {
//     console.log("B");
//     setTimeout(function () {
//       console.log("C");
//     }, 1000);
//   }, 2000);
// }, 3000);

// =================================================

// let i = 0;
// setTimeout(() => alert(i), 100);

// for (let j = 0; j < 1000000000; j++) {
//   i++;
// }

// =================================================

// let a = 1;
// setTimeout(()=>{
//     a=2;
// }, 0)
// console.log(a);

// ..........................

// const first = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "один");
// });

// const second = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "два");
// });

// Promise.race([first, second]).then((res) => console.log(res));

// =================================================

// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));

// console.log(5);

// ================================================

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return "hello world";
// }

// new Promise((resolve) => {
//   setTimeout(() => resolve("hello world"), 2000);
// }).then((data) => console.log(data));
