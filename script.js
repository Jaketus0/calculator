const display = document.querySelector('.display');
const buttons = document.querySelector('button');

buttons.array.forEach(button => {
    button.addEventListener('click', calculate);
});