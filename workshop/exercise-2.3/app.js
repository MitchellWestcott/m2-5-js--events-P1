let body = document.getElementsByClassName("main")[0];
body.style.height = "80%";
body.style.width = "80%";

var viewPortHeight = (window.innerHeight * 0.8);
console.log(viewPortHeight);
var viewPortWidth = (window.innerWidth * 0.8);

for (i = 1; i < 21; i++) {
    let buttons = document.createElement("button");
    buttons.innerText = i;
    buttons.style.position = "absolute";
    buttons.style.height = "60px";
    buttons.style.width = "60px";
    buttons.style.border = "none";
    buttons.style.borderRadius = "90px";
    buttons.style.backgroundColor = "red";
    buttons.style.border = "1px solid white";
    buttons.style.outline = "none"
    buttons.style.color = "white";
    buttons.style.fontSize = "38px";
    buttons.style.top = `${Math.random() * viewPortHeight}px`
    console.log(buttons.style.top);
    buttons.style.left = `${Math.random() * viewPortWidth}px`
    body.append(buttons);
    
}

document.querySelectorAll("button").forEach((a) => {
    a.addEventListener("mousedown", () => {
        a.style.backgroundColor = "green";
        a.addEventListener("mousedown", () => {
            a.style.backgroundColor = "red";
        });
    });
});

