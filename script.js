document.addEventListener('DOMContentLoaded', () => {
    
    const numberButtonsClass = document.getElementsByClassName('numberButtons');
    const arithmeticOperationButtonsClass = document.getElementsByClassName('arithmeticOperationButtons');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');
    const backspaceButton = document.getElementById('backspace');
    const clearHistoryButton = document.getElementById('clearHistory');

    const historyDisplayDiv = document.getElementById('history');
    const calculatorOutputText = document.getElementById('calculatorOutputText');


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

    backspaceButton.addEventListener('click', ()=> {
        if (calculatorOutputText.value === "0") {
            return;
        }
        calculatorOutputText.value = calculatorOutputText.value.slice(-1) !== " " ? calculatorOutputText.value.slice(0, -1) : calculatorOutputText.value.slice(0, -3);
    })

    clearHistoryButton.addEventListener('click', () => {
        if (historyDisplayDiv.innerText !== "") {
            clearHistory();
        }
        else console.log('no history to clear');
    })

    function enterValue(Value) {
        if (calculatorOutputText) {
            const isarithmeticOperators = "+ - * /";
            isarithmeticOperators.includes(Value) ? calculatorOutputText.value += ` ${Value} ` : calculatorOutputText.value += `${Value}`;
        
        }  
    }
    
    function clearValue() {
        if (calculatorOutputText) {
            calculatorOutputText.value = "0";
        }
    }
    
    function calculate() {
        
        
        try {
            const expression = calculatorOutputText.value;
            console.log(expression);
            console.log(typeof(expression));
    
            console.log(expression.split(" "));
            const splitedArray = expression.split(" ").filter(item => item !== "");
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
    
            console.log(`${expression} = ${calculatedValue}`);
            console.log(typeof(calculatedValue));
            
            calculatorOutputText.value = calculatedValue;
    
            history(expression,calculatedValue);
    
        } catch (error) {
            calculatorOutputText.value = `Error: ${error.message}`;
            console.error(`Error: ${error.message}`);
        }
    }
    
    function history(expression,calculatedValue) {
        historyDisplayDiv.innerText += `${expression} = ${calculatedValue} \n`;
    }
    
    function clearHistory() {
        historyDisplayDiv.innerText = "" ;
        console.log('History cleared');
    }
});