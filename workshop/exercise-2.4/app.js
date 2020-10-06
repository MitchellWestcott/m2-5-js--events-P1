//header with button that "click" starts 5 second countdown
//and starts generating a math.random amount of circles between
//1 and 8

//container for the circles

//if buttons.forEach buttons.style.color === "green"
// && ${timer} === 0; display you win else if timer === 0 you lose
//function to set the button color change so it can be stopped


let body = document.querySelector("body");
body.style.height = "100vh";
body.style.width = "100vw";
body.style.margin = "0";
body.style.padding = "0";
body.style.fontFamily = "Luminari";
body.style.letterSpacing = "10px";

let main = document.getElementById("main");
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
// main.style.height = "100%";
// main.style.width = "100%";

let header = document.createElement("header");
header.style.background = "grey";
header.style.height = "100px";
header.style.width = "100%";
header.innerText = "";
header.style.fontSize = "40px";
header.style.color = "red";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignContent = "center";
header.style.alignItems = "center";
// header.innerText = "hello";
header.style.margin = "0";
body.append(header);

let startButton = document.createElement("button");
startButton.style.height = "60px";
startButton.style.width = "150px";
startButton.style.background = "yellow"
startButton.innerText = "S T A R T";
startButton.style.fontSize = "25px";
startButton.style.color = "grey";
header.append(startButton);

let bodySpacing = document.createElement("div");
bodySpacing.style.display = "flex";
bodySpacing.style.justifyContent = "center";
bodySpacing.style.alignItems = "center";
bodySpacing.style.height = "90vh";
// bodySpacing.style.background = "blue";
body.append(bodySpacing);

let gameArea = document.createElement("div");
gameArea.style.display = "flex";
gameArea.style.justifyContent = "center";
gameArea.style.alignItems = "center";
gameArea.style.height = "500px";
gameArea.style.width = "700px";
gameArea.style.background = "lightgrey";
gameArea.style.position = "relative";
bodySpacing.append(gameArea);

let results = document.createElement("p");
results.style.background = "blue";
results.style.height = "200px";
results.style.width = "300px";
results.style.borderRadius = "10px";
results.style.display = "none";
results.style.zIndex = "1";
results.style.alignItems = "center";
results.style.justifyContent = "center";
results.style.color = "gold";
results.style.fontSize = "40px";
gameArea.append(results);

let buttonAmount = Math.floor(Math.random() * 7) + 1;
let clicked = false;
let timeLeft = 5;
let hasWon = false;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    header.innerText = `YOU HAVE ${timeLeft} s REMAINING`;
    
    // header.innerText = `Y O U  H A V E ${countDownTime}S  R E M A I N I N G`;
    for (i = 0; i < buttonAmount; i++) {
        let buttons = document.createElement("button");
        buttons.classList.add("game-button");
        buttons.innerText = i +1;
        buttons.style.position = "absolute";
        buttons.style.height = "50px";
        buttons.style.width = "50px";
        buttons.style.border = "none";
        buttons.style.borderRadius = "90px";
        buttons.style.backgroundColor = "red";
        buttons.style.border = "1px solid white";
        buttons.style.outline = "none"
        buttons.style.color = "white";
        buttons.style.fontSize = "30px";
        buttons.style.left = `${Math.random() * 650}px`;
        buttons.style.top = `${Math.random() * 450}px`
        // buttons.addEventListener("click", function (event) {
        //     buttons.style.backgroundColor = "green";
        //     });
        buttons.addEventListener("click", greenBackground);
        gameArea.append(buttons);
    }
    const gameTimer = setTimeout(function () {
        document.querySelectorAll("button").forEach((a) => {
            if (!hasWon) {
                // results.style.backgroundColor = "white";
                // results.innerText = "W  I  N \n W  I  N \n W  I  N";
                // results.style.display = "flex";
                // clearTimeout(gameTimer);
                // buttons.removeEventListener("click", startButton);
            // } else {
                results.style.backgroundColor = "red";
                results.innerText = "L  O  S  E \n L  O  S  E \n L  O  S  E";
                results.style.display = "flex";
                buttons.removeEventListener("click", greenBackground, true);
            }
        });
    }, 5000);

    // var timeLeft = 5;
    var countDownTimer = setInterval(function() {
        if (hasWon) {
            clearInterval(countDownTimer);
        } else {
        timeLeft -= 1;
        header.innerText = `YOU HAVE ${timeLeft} s REMAINING`;
        if (timeLeft == 0) {
            header.innerText = `TIME IS UP`;
            clearInterval(countDownTimer);
            buttons.removeEventListener("click", startButton);
        }
    }
    }, 1000);



});

    // header.innerText = `Y O U  H A V E  ${timeLeft} s  R E M A I N I N G`;

function greenBackground(event) {
    event.target.style.backgroundColor = "green";
    // this.style.display = "none";
    let allGreen = Array.from(document.querySelectorAll(".game-button")).every(
        (b, index, array) => {
            console.log(array);
            if (b.style.backgroundColor === "green") {
                return true;
            }
        }
    )
    if (allGreen) {
        hasWon = true;
        results.style.backgroundColor = "white";
        results.innerText = "W  I  N \n W  I  N \n W  I  N";
        results.style.display = "flex";
        header.innerText = "V I C T O R Y";
        
    }
};
