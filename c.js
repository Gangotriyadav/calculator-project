
let display = "";

function updateDisplay(value) {
    display += value;  
    document.querySelector('input').value = display;  
}

function AC() {
    display = "";  
    document.querySelector('input').value = "0";  
}


function C() {
    display = display.slice(0, -1);  
    document.querySelector('input').value = display || "0";  
}


function mod() {
    updateDisplay("%");  
}

function d() {
    updateDisplay("/");  
}


function mul() {
    updateDisplay("*");  
}

function m() {
    updateDisplay("-");  
}

function p() {
    updateDisplay("+");  
}

function eq() {
    try {
        display = eval(display).toString();  
        document.querySelector('input').value = display;  
    } catch (error) {
        document.querySelector('input').value = "Error";  
        display = "";  
    }
}

function point() {
    if (!display.includes('.')) {
        updateDisplay(".");  
    }
}

function z() {
    updateDisplay("00");  
}


function one() { updateDisplay("1"); }
function two() { updateDisplay("2"); }
function three() { updateDisplay("3"); }
function four() { updateDisplay("4"); }
function five() { updateDisplay("5"); }
function six() { updateDisplay("6"); }
function seven() { updateDisplay("7"); }
function eight() { updateDisplay("8"); }
function nine() { updateDisplay("9"); }
function zero() { updateDisplay("0"); }

