

//Add
function add (a, b){ return a + b}

//Subtract
function subtract (a, b){ return a - b}

//Multiply 
function multiply (a, b){ return a * b}

//Divide 
function divide (a, b){ return a / b}

let numa;
let numb;
let operator;

//will be called when = is pressed and the result will be displayed on screen 
//may need to clear screen first
function operate(a, b, operator){

    // if (operator === "+") {
    //    return add(a,b);
    // }
    // if (operator === "-") {
    //    return subtract(a,b)
    // }
    // if (operator === "/") {
    //     return multiply(a,b)
    // }
    // if (operator === "*") {
    //     return divide(a,b)
    // }

    switch (operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;   
        case "/":
            return divide(a,b);
            break;
    }


}

console.log(operate(3, 3, "/"));