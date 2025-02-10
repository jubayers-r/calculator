const display = document.getElementById("display");

function appendToDisplay(input) {
    const lastChar = display.textContent.slice(-1);
    const operators = ["+", "-", "*", "/"];

    if (operators.includes(lastChar) && operators.includes(input)) {
        // Replace the last operator with the new one
        display.textContent = display.textContent.slice(0, -1) + input;
    } else {
        display.textContent += input;
    }
}

function clearDisplay() {
    display.textContent = "";
}
function result() {
    const currentExpression = display.textContent;

    if (!currentExpression.trim()) {
        display.textContent = "Error";
        return;
    }

    try {
        // Evaluate only if it's a valid expression
        const evaluatedResult = eval(currentExpression);

        if (evaluatedResult === Infinity || evaluatedResult === -Infinity || isNaN(evaluatedResult)) {
            display.textContent = "Error";
        } else {
            display.textContent = evaluatedResult;
        }
    } catch (error) {
        display.textContent = "Error";
    }
}


