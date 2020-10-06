// Exercise 1.0
// ------------

const targetBody = document.querySelector("body");

targetBody.addEventListener("mousedown", (event) => {
const addText = document.createElement("p");
addText.innerText = "You Win!";
targetBody.appendChild(addText);
});

console.log('exercise-1');
