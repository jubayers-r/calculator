const input = document.getElementById("temp-input");
const celToFar = document.getElementById("cel-far");
const farToCel = document.getElementById("far-cel");
const mySubmit = document.getElementById("mySubmit");
let converted = document.getElementById("converted");

mySubmit.onclick = () =>{
    let convert;
    let temp = Number(input.value);
    if (isNaN(temp)) {
        converted.textContent = `input a valid number`
    } else {
        if (celToFar.checked) {
            convert = (temp * 9/5) + 32;
            converted.textContent = `${convert.toFixed(1)}°F`
        }
        else if (farToCel.checked) {
            convert = (temp - 32) * 5/9;
            converted.textContent = `${convert.toFixed(1)}°C`
        }
        else {
            converted.textContent = `Select a unit`
        }
    }
}