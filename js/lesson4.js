// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const list = document.createElement("ol");
const addBtn = document.createElement("button");
const removeBtn = document.createElement("button");
addBtn.textContent = "Add";
removeBtn.textContent = "Remove";
const input = document.createElement("input");

document.body.append(input, addBtn, removeBtn, list);

addBtn.addEventListener("click", addBtnClick);
removeBtn.addEventListener("click", removeBtnClick);

function addBtnClick() {
	if (input.value.trim() === "") return;
	const li = document.createElement("li");
	li.textContent = input.value;
	list.append(li);
	// if (list.children.length % 2 === 0) {
	// 	li.style.backgroundColor = "yellow";
	// } else {
	// 	li.style.backgroundColor = "blue";
	// }
   li.style.backgroundColor = list.children.length % 2 === 0 ? 'yellow' : 'blue';
	input.value = "";
}

function removeBtnClick() {
	if (!list.lastChild) return;
	list.lastChild.remove();
}
