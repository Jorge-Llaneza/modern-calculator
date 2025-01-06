function getButtonContent(buttonNode) {
    p = buttonNode.querySelector("p");
    return p.textContent
}
let buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    addEventListener("click", manageInput(button));
});
manageInput(buttons) {
    const text = getButtonContent(button);
    switch(text){
        case 1||2||3||4||5||6||7||8||9||0:
            

    }

}
