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

const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomither(max) {
  return Math.floor(Math.random() * max);
}

const box = document.createElement("div");

changeBox();

// box.style.cssText = forms[randomither(forms.length)];
// box.style.backgroundColor = getRandomHexColor();
// box.style.position = 'absolute';
// box.style.left = `${randomither(100)}%`
// box.style.top = `${randomither(100)}%`

document.body.append(box)
box.addEventListener("click", changeBox) 

function changeBox() {
	box.style.cssText = forms[randomither(forms.length)];
box.style.backgroundColor = getRandomHexColor();
box.style.position = 'absolute';
box.style.left = `${randomither(100)}%`
box.style.top = `${randomither(100)}%`
}

