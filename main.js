const btn = document.querySelector('.calculator');
const input = document.querySelector('.input');

btn.addEventListener('click', function(event) {
    const clickedButton = event.target.innerText;

    if (event.target.classList.contains('button')) {
        input.value += clickedButton;
    }

    if (event.target.classList.contains('button_sqrt')) {
        if (input.value) {
            input.value = Math.sqrt(eval(input.value));
        } else input.value = "";
    }

    if (event.target.classList.contains('button_percent')) {
        let entered = input.value.match(/\d+/g);
        if (input.value.includes('+')) {
            let firstNum = Number(entered[0]);
            let secondNum = Number(entered[1]);
            console.log(firstNum);
            console.log(secondNum);
            input.value = (firstNum + (firstNum/100*secondNum));
        }
        if (input.value.includes('-')) {
            let firstNum = Number(entered[0]);
            let secondNum = Number(entered[1]);
            input.value = (firstNum - (firstNum/100*secondNum));
        }
        if (input.value.includes('*')) {
            let firstNum = Number(entered[0]);
            let secondNum = Number(entered[1]);
            input.value = (firstNum * (firstNum/100*secondNum));
        }
        if (input.value.includes('/')) {
            let firstNum = Number(entered[0]);
            let secondNum = Number(entered[1]);
            input.value = (firstNum / (firstNum/100*secondNum));
        }
    }

    if (event.target.classList.contains('button_equal')) {
        input.value = eval(input.value);
    }

    if (event.target.classList.contains('button_reset')) {
        input.value = "";
    }
});