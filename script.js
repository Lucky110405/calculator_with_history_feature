document.addEventListener("DOMContentLoaded", () => {
  const numberButtonsClass = document.getElementsByClassName("numberButtons");
  const arithmeticOperationButtonsClass = document.getElementsByClassName(
    "arithmeticOperationButtons"
  );
  const clearButton = document.getElementById("clear");
  const equalButton = document.getElementById("equal");
  const backspaceButton = document.getElementById("backspace");
  const clearHistoryButton = document.getElementById("clearHistory");

  const historyDisplayDiv = document.getElementById("history");
  const calculatorOutputText = document.getElementById("calculatorOutputText");

  const savedHistory = localStorage.getItem('History');
  if (savedHistory) {
    historyDisplayDiv.innerText = savedHistory;
  }

  if (numberButtonsClass) {
    for (let i = 0; i < numberButtonsClass.length; i++) {
      numberButtonsClass[i].addEventListener("click", () => {
        const numberValue = numberButtonsClass[i].innerText;
        enterValue(numberValue);
      });
    }
  }

  if (arithmeticOperationButtonsClass) {
    for (let i = 0; i < arithmeticOperationButtonsClass.length; i++) {
      arithmeticOperationButtonsClass[i].addEventListener("click", () => {
        const operationValue = arithmeticOperationButtonsClass[i].innerText;
        enterValue(operationValue);
      });
    }
  }

  clearButton.addEventListener("click", () => {
    clearValue();
  });

  equalButton.addEventListener("click", () => {
    calculate();
  });

  backspaceButton.addEventListener("click", () => {
    backspace();
  });

  clearHistoryButton.addEventListener("click", () => {
    clearHistory();
  });

  document.addEventListener('keydown', (event) => {
    console.log("key:" + event.key);
    let key = event.key;
    switch (key) {
      case 'Enter' :
        calculate();
        break;
      case 'Backspace' :
        backspace();
        break;
      case 'c' :
        clearValue();
        break;
      default :
        enterValue(key);
        break;
    }
  });



  function enterValue(Value) {
    try{
      const isarithmeticOperators = "+ - * /";

      if (isarithmeticOperators.includes(Value)) {
        if (calculatorOutputText.value.slice(-1) === " ") {
          throw new Error("Invalid - you had entered consecutive operators");
        }
        calculatorOutputText.value += ` ${Value} `;
      } else {
        if (calculatorOutputText.value === "0") {
        calculatorOutputText.value = "";
        }
        calculatorOutputText.value += `${Value}`;
      }

    } catch(error) {
      console.error(`Error: ${error.message}`);
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
      console.log(`input expression is: ${expression}`);
      console.log(typeof expression);

      const splitedArray = expression.split(" ");
      console.log(splitedArray);
      console.log(typeof splitedArray);

      const filterdSplitedArray = expression.split(" ").filter((item) => item !== "");
      console.log(filterdSplitedArray);
      console.log(typeof filterdSplitedArray);

      let calculatedValue = Number(filterdSplitedArray[0]);

      for (let i = 1; i < filterdSplitedArray.length; i += 2) {
        let operators = filterdSplitedArray[i];
        let numbers = Number(filterdSplitedArray[i + 1]);
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
              throw new Error("Cannot divide by zero");
            }
            calculatedValue /= numbers;
            break;

          default:
            throw new Error(`Invalid operator`);
        }
      }

      if (isNaN(calculatedValue)) {
        throw new Error("Invalid input");
      }

      console.log(`${expression} = ${calculatedValue}`);
      console.log(`type of calculated value is: ${typeof calculatedValue}`);

      calculatorOutputText.value = calculatedValue;

      history(expression, calculatedValue);

    } catch (error) {
      calculatorOutputText.value = `Error: ${error.message}`;
      console.error(`Error: ${error.message}`);
    }
  }

  function backspace() {
    if (calculatorOutputText.value === "0") {
      return;
    }
    calculatorOutputText.value = calculatorOutputText.value.slice(-1) !== " " ? calculatorOutputText.value.slice(0, -1) : calculatorOutputText.value.slice(0, -3);
  }

  function history(expression, calculatedValue) {
    let history = `${expression} = ${calculatedValue}`;
    historyDisplayDiv.innerText += `${history}\n`;
    localStorage.setItem('History', historyDisplayDiv.innerText);
  }

  function clearHistory() {
    if (historyDisplayDiv.innerText !== "") {
      historyDisplayDiv.innerText = "";
      localStorage.removeItem('History');
      console.log("History cleared");
    } else {
      console.log("no history to clear");
    }    
  }

});