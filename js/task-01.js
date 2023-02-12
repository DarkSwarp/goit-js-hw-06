const quantityH2El = document.querySelectorAll(".item > h2");
console.log(`Number of categories: ${quantityH2El.length}`);

const h2El = document.querySelectorAll(".item > h2");
const ilEl = document.querySelectorAll(".item > ul");
for (let i = 0; i < quantityH2El.length; i += 1) {
    console.log(`Category: ${h2El[i].textContent}`);
    console.log(`Elements: ${ilEl[i].children.length}`);
}
