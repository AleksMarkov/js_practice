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

const salaries = {
   Mango: 100,
   Poly: 160,
   Ajax: 1470,
   };

   // let sum = 0;
   // const salary = Object.values(salaries);
   // for(const num of salary) {
   //    sum += num;
   // }
   // console.log(sum);

   const salary = Object.values(salaries);

   const sum = salary.reduce((sum, num) => sum + num, 0)
   console.log(sum);



