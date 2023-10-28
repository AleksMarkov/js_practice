// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement("ol");
// const addBtn = document.createElement("button");
// const removeBtn = document.createElement("button");
// addBtn.textContent = "Add";
// removeBtn.textContent = "Remove";
// const input = document.createElement("input");

// document.body.append(input, addBtn, removeBtn, list);

// addBtn.addEventListener("click", addBtnClick);
// removeBtn.addEventListener("click", removeBtnClick);

// function addBtnClick() {
// 	if (input.value.trim() === "") return;
// 	const li = document.createElement("li");
// 	li.textContent = input.value;
// 	list.append(li);
// 	// if (list.children.length % 2 === 0) {
// 	// 	li.style.backgroundColor = "yellow";
// 	// } else {
// 	// 	li.style.backgroundColor = "blue";
// 	// }
//    li.style.backgroundColor = list.children.length % 2 === 0 ? 'yellow' : 'blue';
// 	input.value = "";
// }

// function removeBtnClick() {
// 	if (!list.lastChild) return;
// 	list.lastChild.remove();
// }

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const box = document.createElement("div");

// changeBox();

// box.style.cssText = forms[randomither(forms.length)];
// box.style.backgroundColor = getRandomHexColor();
// box.style.position = 'absolute';
// box.style.left = `${randomither(100)}%`
// box.style.top = `${randomither(100)}%`

// document.body.append(box)
// box.addEventListener("click", changeBox)

// function changeBox() {
// 	box.style.cssText = forms[randomither(forms.length)];
// box.style.backgroundColor = getRandomHexColor();
// box.style.position = 'absolute';
// box.style.left = `${randomither(100)}%`
// box.style.top = `${randomither(100)}%`
// }

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const input = document.querySelector("#passwordInput");
// const btn = document.querySelector("#passwordButton");
// btn.addEventListener("click", hideText);

// function hideText(event) {
//   if (btn.textContent === "Приховати") {
//     input.style.color = "transparent";
//     btn.textContent = "Розкрити";
//   } else {
//     input.style.color = "inherit";
//     btn.textContent = "Приховати";
//   }
// }

/*
// Завдання 6
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази
// */
// const btn = document.querySelector("#double");
// const li = document.querySelectorAll(".listItem");
// btn.addEventListener("click", doubleValue);

// function doubleValue() {
//   li.forEach((element) => (element.textContent *= 2));
// }

// TODO:======================
// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table = document.querySelector("#productTable");
// const message = document.querySelector("#productDetails");

// table.addEventListener("click", showMessage);

// function showMessage(event) {
//   if (event.target.nodeName !== "TD") return;

//   const parent = event.target.parentNode;

//   const product = parent.firstElementChild.textContent;
//   const price = parent.lastElementChild.textContent;

//   // console.log(product);
//   // console.log(price);

//   message.textContent = `Ви вибрали ${product} за ${price}`;
// }
// =====================================

/*
    Завдання 8
    При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
    За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
    інформацією про те, яка кнопка була натиснута скільки разів.
    */

const statList = document.querySelector(".statList");
const resultButton = document.querySelector("#resultButton");
const resultSection = document.querySelector("#resultSection");

statList.addEventListener("click", countBtn);

resultButton.addEventListener("click", showResult);

let total = 0;

let statistics = {};

function countBtn(event) {
  if (event.target.nodeName !== "BUTTON") return;
  const num = Number(event.target.dataset.number);
  total += num;

  console.log(total);
}

function showResult() {
  resultSection.textContent = `Загальна сума значень - ${total}`;
  total = 0;
}

//  =====================================
