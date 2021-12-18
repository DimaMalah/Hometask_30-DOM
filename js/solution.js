
const liEl = document.querySelectorAll("li")

console.log(liEl.length); //общее кол - во элементов

let arrOfLies = [];
for (let li of liEl) {
	arrOfLies.push(li.innerHTML)// Вытянуть текст из тегов li и записать текст содержащийся в 
	// каждом элементе в массив — вывести этот массив в консоль
}
console.log(arrOfLies);
