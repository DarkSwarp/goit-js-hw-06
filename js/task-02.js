const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ulEl = document.querySelector("#ingredients");
let liEl;
const arrayLiEl = [];

ingredients.forEach((el) => {
    liEl = document.createElement("li");
    liEl.className = "item";
    liEl.textContent = el;
    arrayLiEl.push(liEl);
});
ulEl.append(...arrayLiEl);
