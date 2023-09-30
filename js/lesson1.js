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
// const answer = prompt("Яка офіційна назва JavaScript?");
// if (answer === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

//*
//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const answer = prompt("Enter number");

// let minutes = answer % 60;
// let hours = Math.floor(answer / 60);

// minutes = String(minutes).padStart(2, 0);
// hours = String(hours).padStart(2, 0);
// console.log(`${hours}:${minutes}`);

// +++++++++++++++++++++++++

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 32;
// const min = 2;
// let total = 0;
// for (let i = max; i >= min; i -= 1 ){
//     console.log(i);
//     if (i % 2 === 0){
//         total += i
//     }
// }
// console.log(total);

// +++++++++++++++++++

//function counter(min, max){
//    let total = 0;
//   for (let i = max; i >= min; i -= 1 ){
//        console.log(i);
//        if (i % 2 === 0){
//            total += i
//        }
//    }
//  return total;
//}
//console.log(counter(1, 12));

//==========================================

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = prompt("Введіть число від одного до чотирьох:");

// let result = "";
// switch (num) {
//     case "1":
//         result = "Зима";

//         break;
//     case "2":
//         result = "Весна";

//         break;

//         case "3":
//         result = "Літо";

//         break;

//         case "4":
//         result = "Осінь";

//         break;

//     default:
//         result = "Введіть число від 1 до 4!!!";
// }
// //alert(result)
// function check(num) {
//     let result = "";
// switch (num) {
//     case "1":
//         result = "Зима";

//         break;
//     case "2":
//         result = "Весна";

//         break;

//         case "3":
//         result = "Літо";

//         break;

//         case "4":
//         result = "Осінь";

//         break;

//     default:
//         result = "Введіть число від 1 до 4!!!";
//     }
//     return result;
// }

// console.log(check("3"))

// --------------------------------

// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// const i = styles.indexOf("Блюз");
// // styles[i] = 'Класика'
// styles.splice(i, 1, "Класика");
// console.log(styles.shift());
// styles.unshift("Реп", "Реггі");
// // console.log(styles)

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// function logItems(array) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     console.log(`${index + 1} - ${element}`);
//   }
// }
// logItems(styles);

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function userLogin(array) {
//    const userName = prompt("Введіть логін");
//    // if (array.includes(userName)) {
//    //    alert("Доступ дозволено");
//    // } else {
//    //    alert("В доступі відмовлено");
//    // }
//    //*
//    // alert(array.includes(userName) ? "Доступ дозволено" : "В доступі відмовлено");
//    //*
//       if (array.includes(userName)) {
//       return alert("Доступ дозволено");

//    }
//    return alert("В доступі відмовлено");

// }
// userLogin(logins);

//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];

// function add(name) {
//    names.push(name);
//    return names;
// }
// console.log(add('Vladislav'));

// function remove(name) {
//    const indexName = names.indexOf(name);
//    if (indexName !== -1) {
//       names.splice(indexName, 1);
//       return names;
//    }
//    return "User not found";

// }
// console.log(remove("Anton"));
