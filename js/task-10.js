function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButtonEl = document.querySelector("button[data-create]");
const destroyButtonEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const boxesBox = document.querySelector("#boxes");
let inputValue = 0;
inputEl.addEventListener("input", (event) => {
    inputValue = event.currentTarget.value;
});
createButtonEl.addEventListener("click", () => {
    createBoxes(inputValue);
});
function createBoxes(inputValue) {
    console.log(inputValue);
    let startSize = 20;
    let markup = "";
    let color;
    for (let i = 1; i <= inputValue; i += 1) {
        color = getRandomHexColor();
        startSize += 10;
        markup += `<div style = "width: ${startSize}px; height: ${startSize}px; background: ${color}"></div>`;
    }
    boxesBox.insertAdjacentHTML("beforeend", markup);
}
destroyButtonEl.addEventListener("click", () => (boxesBox.innerHTML = ""));
