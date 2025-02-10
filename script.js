const display = document.getElementById("display");

function appendToDisplay(input) {
    display.textContent += input;
}
function clearDisplay() {
    display.textContent = "";
}
function result () {
    if (display.textContent = "Error")
    try {
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = "Error"
    }

}


