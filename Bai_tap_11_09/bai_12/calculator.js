const display = document.getElementById("display");
let memory = 0;
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function clearEntry() {
    display.value = "";
}
function deleteChar() {
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
function memoryClear() {
    memory = 0;
}
function memoryRecall() {
    display.value = memory;
}
function memoryStore() {
    memory = parseFloat(display.value) || 0;
}
function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}
function square() {
    display.value = Math.pow(parseFloat(display.value), 2);
}
function inverse() {
    display.value = 1 / parseFloat(display.value);
}
function calculatePercentage(){
    display.value = parseFloat(display.value) / 100;
}
