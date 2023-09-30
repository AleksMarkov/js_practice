//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
// const user = {
//    name: "John",
//    age: 20,
//    hobby: "tenis",
//    premium: true,
//    };
//    user.mood = "happy";
//    user.hobby = "skydiving";
//    user.premium = false;
//    const userArr = Object.keys(user);
//    for (const key of userArr) {
//       // console.log(key);
//       // console.log(user[key]);
//       console.log(`${key}: ${user[key]}`);
//    }

//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//    Mango: 100,
//    Poly: 160,
//    Ajax: 1470,
//    };

//    // let sum = 0;
//    // const salary = Object.values(salaries);
//    // for(const num of salary) {
//    //    sum += num;
//    // }
//    // console.log(sum);

//    const salary = Object.values(salaries);

//    const sum = salary.reduce((sum, num) => sum + num, 0)
//    console.log(sum);

//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвами каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//    { name: "Смарагд", price: 1300, quantity: 4 },
//    { name: "Діамант", price: 2700, quantity: 6 },
//    { name: "Сапфір", price: 400, quantity: 7 },
//    { name: "Щебінь", price: 150, quantity: 100 },
//  ];

//  const calcTotalPrice = (stones, stonesName) => {
//    return stones.reduce((sum, {name, price, quantity}) => name === stonesName ? sum + price * quantity : sum, 0)
//    // let sum = 0
//    // for(const {name, price, quantity} of stones){
//    //    if(name === stonesName){
//    //       sum += price * quantity
//    //    }
//    // }
//    // return sum
//  }
//  console.log(calcTotalPrice(stones, "Смарагд"));

//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат
// const calculator = {
//   read(a, b) {
// this.aNew = a;
// this.bNew = b;
//   },
//   sum() {
// return !this.aNew || !this.bNew
//   ? "There are no numbers"
//   : this.aNew + this.bNew;
//   },
//   mult() {
// return !this.aNew || !this.bNew
//   ? "There are no numbers"
//   : this.aNew * this.bNew;
//   },
// };
//
// console.log(calculator.read(5, 10));
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());
