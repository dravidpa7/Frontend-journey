const display = document.getElementById("display");


function appendToDisplay( input ){
    
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        // Allow only digits, operators, and decimal points
        if (/^[0-9+\-*/.() ]+$/.test(display.value)) {
            display.value = new Function('return ' + display.value)();
        } else {
            display.value = "Error";
        }
    } catch (err) {
        display.value = "Error";
    }
}

function backSpace(){
    display.value = display.value.slice(0, -1);
}