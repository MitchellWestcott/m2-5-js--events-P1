let body = document.getElementsByClassName("main")[0];
body.style.height = "100vh";
body.style.width = "100vw";
body.style.margin = "0";
//body.style.background = "grey";
body.style.display = "flex";
body.style.justifyContent = "center";

//console.log("here");

let box = document.createElement("div");
box.style.height = "300px";
box.style.width = "80%";
//box.style.background = "pink";
box.style.display = "flex";
box.style.flexFlow = "wrap";
box.style.justifyContent = "center";
//box.style.border = "1px solid green";
body.append(box);

for (i = 1; i < 21; i++) {
    let buttons = document.createElement("button");
    buttons.innerText = i;
    buttons.style.fontFamily = "Comic Sans MS";
    buttons.style.height = "100px";
    buttons.style.width = "100px";
    buttons.style.border = "none";
    buttons.style.margin = "1px";
    buttons.style.backgroundColor = "red";
    //buttons.style.border = "1px solid white";
    // function changeColor() {
    //     var buttCol = buttons;
    //     if (!buttCol.style.color || buttCol.style.color == "red")
    //         buttCol.style.color = "green";

    //     else
    //         buttCol.style.color = "red";
    //     };
    //buttons.addEventListener("click", changeColor()); 
    
    //{     buttons.style.backgroundColor = "green";
    // });
    buttons.style.color = "white";
    buttons.style.fontSize = "40px";
    box.append(buttons);
    
}

document.querySelectorAll("button").forEach((a) => {
    a.addEventListener("mousedown", () => {
        a.style.backgroundColor = "green";
        a.addEventListener("mousedown", () => {
            a.style.backgroundColor = "red";
        });
    });
});

