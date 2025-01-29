document.addEventListener('DOMContentLoaded', () => {
    
    const numberButtonsClass = document.getElementsByClassName('numberButtons');
    const arithmeticOperationButtonsClass = document.getElementsByClassName('arithmeticOperationButtons');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');


    if (numberButtonsClass) {
        for (let i = 0 ; i < numberButtonsClass.length ; i++) {
            numberButtonsClass[i].addEventListener('click', () => {
                const numberValue = numberButtonsClass[i].innerText;
                enterValue(numberValue);
            })
        }
    }

    if (arithmeticOperationButtonsClass) {
        for (let i = 0 ; i < arithmeticOperationButtonsClass.length ; i++) {
            arithmeticOperationButtonsClass[i].addEventListener('click', () => {
                const operationValue = arithmeticOperationButtonsClass[i].innerText;
                enterValue(operationValue);
            })
        }
    }
    
    clearButton.addEventListener('click', () => {
        clearValue();
    })

    equalButton.addEventListener('click', () => {
        calculate();
    })

});

function enterValue(Value) {
    const calculatorOutputText = document.getElementById('calculatorOutputText');
    if (calculatorOutputText) {
        const isarithmeticOperators = "+ - * /";
        isarithmeticOperators.includes(Value) ? calculatorOutputText.value += ` ${Value} ` : calculatorOutputText.value += `${Value}`;
    
    }  
}

function clearValue() {
    const calculatorOutputText = document.getElementById('calculatorOutputText');
    if (calculatorOutputText) {
        calculatorOutputText.value = "0";
    }
}

function calculate() {
    const calculatorOutputText = document.getElementById('calculatorOutputText');
    const splitedArray = calculatorOutputText.value.split(" ");
    
    console.log(splitedArray);
    const array = splitedArray.forEach(element => {
        Number(element);
    });
    console.log(array);

    calculatorOutputText.value = calculatedValue;
}