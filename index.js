
let messageEl = document.getElementById("message-el");


function setNumber(buttonParam) {

    messageEl.textContent = messageEl.textContent + buttonParam.textContent;

}

function setOperand(buttonParam) {

    messageEl.textContent = messageEl.textContent + " " + buttonParam.textContent + " ";

}

function performOperation(buttonParam) {
    calculate('+');
    calculate('-');
    calculate('x');
    calculate('÷');
}

function calculate(sign) {

    let mainText = messageEl.textContent;

    let signLoc = mainText.indexOf(sign);

    if (signLoc >= 0) {

        let firstNum = mainText.substring(0, signLoc).trim();
        let secondNum = mainText.substring(signLoc + 1).trim();

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        if (sign == '+') {
            messageEl.textContent = firstNum + secondNum;
        }
        else if (sign == '-') {
            messageEl.textContent = firstNum - secondNum;
        }
        else if (sign == 'x') {
            messageEl.textContent = firstNum * secondNum;
        }
        else if (sign == '÷') {
            messageEl.textContent = firstNum / secondNum;
        }
    }
}

function clearMainText() {
    messageEl.textContent = '';
}
