document.addEventListener('DOMContentLoaded', () => {
    
    const numberButtonsClass = document.getElementsByClassName('numberButtons');
    const arithmeticOperationButtonsClass = document.getElementsByClassName('arithmeticOperationButtons');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');


    if (numberButtonsClass) {
        for (let i = 0 ; i < numberButtonsClass.length ; i++) {
            numberButtonsClass[i].addEventListener('click', () => {
                if (calculatorOutputText.value === "0") {
                    calculatorOutputText.value = "";
                }
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
    
    
    try {

        const calculatorOutputText = document.getElementById('calculatorOutputText');
        console.log(calculatorOutputText.value);
        console.log(typeof(calculatorOutputText.value));

        const splitedArray = calculatorOutputText.value.split(" ").filter(item => item !== "");
        console.log(splitedArray);
        console.log(typeof(splitedArray));
    
    
        let calculatedValue = Number(splitedArray[0]);

        for (let i = 1; i < splitedArray.length; i+=2) {
            let operators = splitedArray[i];
            let numbers = Number(splitedArray[i+1]);
            switch (operators) {
                case "+":
                    calculatedValue += numbers;
                    break;
            
                case "-":
                    calculatedValue -= numbers;
                    break;

                case "*":
                    calculatedValue *= numbers;
                    break;
                
                case "/":
                    if (numbers === 0) {
                        throw new Error('Cannot divide by zero');
                    }
                    calculatedValue /= numbers;
                    break;
                
                default:
                    throw new Error(`Invalid operator`);
            }
        }

        if (isNaN(calculatedValue)) {
            throw new Error('Invalid input');
        }

        console.log(`${calculatorOutputText.value} = ${calculatedValue}`);
        console.log(typeof(calculatedValue));
        
        calculatorOutputText.value = calculatedValue;

    } catch (error) {
        calculatorOutputText.value = `Error: ${error.message}`;
        console.error(`Error: ${error.message}`);
    }
    
    
}