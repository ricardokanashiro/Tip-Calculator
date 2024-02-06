let tipButtons = document.querySelectorAll('.selectTip__tipButton');
let billAmountInput = document.querySelector('#billAmountInput');
let peopleNumInput = document.querySelector('#peopleNumInput');
let customTipInput = document.querySelector('#customTip');
let tipAmountNum = document.querySelector('.tipAmount__number');
let totalAmountNum = document.querySelector('.totalAmount__number');
let resetButton = document.querySelector('.resultCard__resetButton'); 

function selectTipButton(event) {
    let previousSelectedButton = document.querySelector('.selectTip__tipButton--active');

    if(previousSelectedButton) {
        previousSelectedButton.classList.remove('selectTip__tipButton--active');

        event.target.classList.add('selectTip__tipButton--active');
    } else {
        event.target.classList.add('selectTip__tipButton--active');
    }

    customTipInput.value = '';

    calcTip();
}

function deselectTipButton() {
    let selectedButton = document.querySelector('.selectTip__tipButton--active');

    if(selectedButton) {
        selectedButton.classList.remove('selectTip__tipButton--active');
    }
}

function calcTip() {
    let selectedButton = document.querySelector('.selectTip__tipButton--active');

    let billValue = Number(billAmountInput.value);
    let peopleNum = Number(peopleNumInput.value);
    let tipValue = 0;

    if(customTipInput.value == '' && selectedButton) {
        tipValue = Number(selectedButton.dataset.percentage)/100;
    } else if(!customTipInput.value == '' && !selectedButton) {
        tipValue = Number(customTipInput.value)/100;
    }

    resetButton.classList.remove('resultCard__resetButton--active');

    if(tipValue || billValue || peopleNum) {
        resetButton.classList.add('resultCard__resetButton--active');
    }

    if(tipValue && billValue && peopleNum) {
        let tipTotal = (billValue * tipValue);
        let total = (billValue + tipTotal);

        tipAmountNum.innerText = `$${(tipTotal / peopleNum).toFixed(2)}`;
        totalAmountNum.innerText = `$${(total / peopleNum).toFixed(2)}`;
    }
}

function resetValues(event) {

    if(event.target.classList.contains('resultCard__resetButton--active')) {
        let selectedButton = document.querySelector('.selectTip__tipButton--active');

        if(selectedButton) {
            selectedButton.classList.remove('selectTip__tipButton--active');
        }
    
        billAmountInput.value = '';
        tipAmountNum.value = '';
        peopleNumInput.value = '';
        customTipInput.value = '';

        tipAmountNum.innerText = '$0.00';
        totalAmountNum.innerText = '$0.00';

        event.target.classList.remove('resultCard__resetButton--active');
    }

}

tipButtons.forEach(button => button.addEventListener('click', (event) => selectTipButton(event)));

customTipInput.addEventListener('focus', deselectTipButton);

billAmountInput.addEventListener('blur', calcTip);
customTipInput.addEventListener('blur', calcTip);
peopleNumInput.addEventListener('blur', calcTip);

resetButton.addEventListener('click', (event) => resetValues(event));