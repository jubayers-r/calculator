let count =  0;
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
function updateDisplay() {
    countLabel.textContent = count;
}

decreaseBtn.onclick = () => {
    count--;
    updateDisplay()
    }
increaseBtn.onclick = () => {
    count++;
    updateDisplay()
}
resetBtn.onclick = () => {
    count = 0;
    updateDisplay()
}