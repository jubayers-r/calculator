const display = document.getElementById("display");

function appendToDisplay(input) {
    display.textContent += input;
}
function clearDisplay() {
    display.textContent = "";
}
function result () {
    try {
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = "Error"
    }

}


