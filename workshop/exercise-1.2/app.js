// Exercise 1.2
// ------------
console.log('exercise 1.2');

const body = document.querySelector("body");
body.style.height = "100vh";
body.style.width = "100vw";
body.style.margin = "0";
body.style.background = "rgb(238,174,202)";
body.style.background = "radial-gradient(circle, rgba(238,174,202,0.6937149859943977) 10%, rgba(214,218,181,0.6993172268907564) 46%, rgba(148,187,233,1) 80%)";
body.style.fontFamily = "Comic Sans MS";

const targetTime = document.getElementById("time");
//targetTime.innerText = //`${timer}`;

//const headText = document.createElement("h2");
//body.append(headText);

//this will include the ${timer} element
//Math.floor(Math.random() * 5) + 1 

let heading = document.getElementsByClassName("time-text")[0];
heading.style.fontSize = "40px";
heading.style.color = "white";
heading.style.padding = "40px";

let results = document.createElement("h1");
results.style.textAlign = "center";
results.style.fontSize = "100px";
results.style.color = "white";
results.style.paddingTop = "10vh";



let timer = Math.floor(Math.random() * 5) + 1;

let targetSpan = document.getElementById("time");
targetSpan.innerText = `${timer}`;
targetSpan.style.color = "gold";
//spanText.append(targetSpan);

//function timer(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//};


console.log(timer);

//target id "span" and let .innerText = timer

let click = false;

document.body.addEventListener("click", () => {
    click = true;
});

let countDown = setTimeout(() => {
    if (click === true) {
        clearTimeout(countDown);
        results.innerText = "Got it!";
    } else {
        results.innerText = "Loser";
    }
    body.append(results);
}, timer * 1000);