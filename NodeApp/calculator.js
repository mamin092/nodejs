
//var firstNumber,secondNumber;

function add(firstNumber,secondNumber) {
    return firstNumber + secondNumber;
}

function sub(firstNumber,secondNumber) {
    return firstNumber - secondNumber;
}

function multi(firstNumber,secondNumber) {
    return firstNumber * secondNumber;
}

function div(firstNumber,secondNumber) {
    return firstNumber / secondNumber;
}

module.exports = {

    msg:'calculator',
    calculatorObj:{
        add:add,
        sub:sub,
        multi:multi,
        div:div
    }

};
