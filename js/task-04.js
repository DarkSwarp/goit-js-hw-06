let counterValue = 0;
const value = document.querySelector("#value");
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
});
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
});
