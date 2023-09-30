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

//1. Напишіть дві функції
// letMeSeeYourName(callback) - питає ім'я користувача
//через prompt и викликає callback функцію
//greet(name) - коллбек, якій приймає ім'я та логірує в консоль
//рядок "Привіт, <name>"
//Реалізуй перевірку, що prompt не пустий
// якщо пустий - додай дефолтне значення

//function letMeSeeYourName(callback) {
//let yourName = prompt("Enter your name!")
//if (!yourName) {
//  yourName = "user";
//}
//  callback(yourName)
//}

//function greatName(name) {
//   console.log(`hello ${name}`);
//}
//letMeSeeYourName(greatName);

//2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товара, а також callback.
//Функція створює об'єкт товара, додавая йому унікальний
//ідентифікатор у властивість id та викликає callback
//передавая йому створений об'єкт.
//showProduct(product) - коллбек приймає об'єкт
//продукта і логірує його в консоль

// function makeProduct(name, price, callback) {
//     const product = { name, price, id: Math.random() }
//     callback(product)
// }

// function showProduct(product) {
//     console.log(product);
// }

// makeProduct("banana", 10, showProduct);

//* TASK 5

//5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунка
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push({ ...transaction, id: Math.random() });
  },
  //Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає йогого в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
   if(amount > this.balance) {
      return console.log("Недостатньо коштів на рахунку");
   }
    this.balance -= amount;
    const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push({ ...transaction, id: Math.random() });

  },
  //Метод повертає поточний баланс
  getBalance() {
   return `На вашому рахунку ${this.balance} UAH`;
  },
  //Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {
   const transaction = this.transactions.find((transaction) => transaction.id === id);
   if(!transaction) {
      return "Транзакцію не знайдено";
   }
   return transaction;
  },
  //Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {  
   return this.transactions.filter((transaction) => transaction.type === type).reduce((sum, {amount}) => sum + amount, 0);
  },
};
account.deposit(1500);
account.withdraw(1200);
account.deposit(2600);
console.log(account.getTransactionType(Transaction.DEPOSIT));
console.log(account.getTransactionDetails(1));
console.log(account.getBalance());
console.log(account);
