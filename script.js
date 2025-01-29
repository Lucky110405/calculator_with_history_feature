document.addEventListener('DOMContentLoaded', () => {
    const numberButtonsClass = document.getElementsByClassName('numberButtons');
    for (let i = 0 ; i < numberButtonsClass.length ; i++) {
        numberButtonsClass[i].addEventListener('click', () => {
            const numberValue = numberButtonsClass[i].innerText;
            enterNumber(numberValue);
        })
    }
});

function enterNumber(numberValue) {
    const calculatorOutputText = document.getElementById('calculatorOutputText');
    calculatorOutputText.innerText += `${numberValue}`;
}