const btn = document.querySelector('.calculator');
const input = document.querySelector('.input');

btn.addEventListener('click', function(event) {
    const clickedButton = event.target.innerText;

    if (event.target.classList.contains('button')) {
        input.value += clickedButton;
    }

    if (event.target.classList.contains('button_sqrt')) {
        input.value = Math.sqrt(eval(input.value));
    }

    if (event.target.classList.contains('button_percent')) {
        input.value = eval(input.value)/100;
    }

    if (event.target.classList.contains('button_equal')) {
        input.value = eval(input.value);
    }

    if (event.target.classList.contains('button_reset')) {
        input.value = "";
    }
});