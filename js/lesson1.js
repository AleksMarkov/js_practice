// for (let i = 6; i > 3; i--) {}
// console.log(i);
//+++++++
// Що буде виведено в консоль ?
// let b = 20;

// if (true) {
//   console.log(b);
//   b = 10;
// }
//+++++++++++++++++++++++++++++++++++++++
// Який результат буде виведено в консоль?
// console.log(typeof typeof 1);
//+++++++++++++++++++++++++++++++++++++++
// Що відобразиться в консолі:
// console.log(Number(undefined));
//+++++++++++++++++++++++++++++++++++++++
//console.log("10" - 8 + true);
//console.log(5 + 5 + "5");
//+++++++++++++++++++++++++++++++++++++++
// const a = 10;
// function check() {
//   const a = 20;
//   console.log(a);
// }
// check();
//+++++++++++++++++++++++++++++++++++++++
//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"
const answer = prompt("Яка офіційна назва JavaScript?");
if (answer === "ECMAScript") {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
