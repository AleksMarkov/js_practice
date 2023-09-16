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

const num = prompt("Введіть число від одного до чотирьох:");


let result = "";
switch (num) {
    case "1":
        result = "Зима";
        
        break;
    case "2":
        result = "Весна";
        
        break;
    
        case "3":
        result = "Літо";
        
        break;
    
        case "4":
        result = "Осінь";
        
        break;
    
    default:
        result = "Введіть число від 1 до 4!!!";  
}
//alert(result)
function check(num) {
    let result = "";
switch (num) {
    case "1":
        result = "Зима";
        
        break;
    case "2":
        result = "Весна";
        
        break;
    
        case "3":
        result = "Літо";
        
        break;
    
        case "4":
        result = "Осінь";
        
        break;
    
    default:
        result = "Введіть число від 1 до 4!!!";  
    }
    return result;
}

console.log(check("3"))