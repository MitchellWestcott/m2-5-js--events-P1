// Exercise 1.1
// ------------

const body = document.querySelector("body");
body.style.background = "rgb(238,174,202)";
body.style.background = "radial-gradient(circle, rgba(238,174,202,0.6937149859943977) 10%, rgba(214,218,181,0.6993172268907564) 46%, rgba(148,187,233,1) 80%)";
//body.style.background = "radial-gradient(circle, rgba(238,174,202,1) 34%, rgba(148,187,233,1) 80%)";
//body.style.background = "radial-gradient(circle, rgba(251,63,179,0.2903536414565826) 0%, rgba(70,252,233,0.5032387955182073) 100%)";
body.style.fontFamily = "Comic Sans MS"
body.style.height = "100vh";
body.style.width = "100vw";
body.style.margin = "0";
body.style.padding = "0";

const headText = document.createElement("h2");
headText.innerText = "Click quickly!";
headText.style.paddingLeft = "20px";
headText.style.color = "white";
headText.style.fontSize = "30px";
body.append(headText);

let results = document.createElement("h1");
results.style.textAlign = "center";
results.style.fontSize = "80px";
results.style.color = "white";
results.style.paddingTop = "25vh";


let click = false;

document.body.addEventListener("click", () => {
    click = true;
});

let countDown = setTimeout(() => {
    if (click === true) {
        clearTimeout(countDown);
        results.innerText = "You Win!";
    } else {
        results.innerText = "You Lose!";
    }
    body.append(results);
}, 1000);

//targetBody.addEventListener("click", ())

console.log('exercise 1.1');


