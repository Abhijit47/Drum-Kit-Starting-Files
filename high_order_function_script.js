//*This is a high order function because it takes another function as an argument and returns a value. 
//*The function that is passed in as an argument is called a callback function.
//*The callback function is the operator function.
//*The operator function is called inside the calculator function.
//*The calculator function is the high order function.
//*The calculator function is called with the arguments 10, 5, and the operator function.
//*The operator function is called with the arguments 10 and 5.
//*The operator function returns a value which is then returned by the calculator function.
//*The calculator function is then called and the value is assigned to the variable result.
//***The result is then logged to the console.
function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function calculator (num1, num2, operator) {
    return operator (num1, num2);
}

calculator (2,6, add);