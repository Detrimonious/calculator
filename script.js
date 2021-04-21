function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    if(operator === '+') add(a,b);
    else if(operator === '-') subtract(a,b);
    else if(operator === '*') multiply(a,b);
    else if(operator === '/') divide(a,b);
}

const solution = document.querySelector('#solution');
let displayValue = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if (button.innerText >= 0 || button.innerText <= 9){
        button.addEventListener('click', () => {
            solution.innerText += button.innerText;
        });
    }
    else if (button.innerText === '+' || button.innerText === '-' ||
        button.innerText === '*' || button.innerText === '/'){
        button.addEventListener('click', () => {
            displayValue = solution.innerText;
        });
    }
});