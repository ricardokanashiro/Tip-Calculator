let tipButtons = document.querySelectorAll('.selectTip__tipButton');
let billAmountInput = document.querySelector('#billAmountInput');
let peopleNumInput = document.querySelector('#peopleNumInput');
let customTipInput = document.querySelector('#customTip');

function selectTipButton(event) {
    let previousSelectedButton = document.querySelector('.selectTip__tipButton--active');

    if(previousSelectedButton) {
        previousSelectedButton.classList.remove('selectTip__tipButton--active');

        event.target.classList.add('selectTip__tipButton--active');
    } else {
        event.target.classList.add('selectTip__tipButton--active');
    }
}

function deselectTipButton() {
    let previousSelectedButton = document.querySelector('.selectTip__tipButton--active');

    if(previousSelectedButton) {
        previousSelectedButton.classList.remove('selectTip__tipButton--active');
    }
}

tipButtons.forEach(button => button.addEventListener('click', (event) => selectTipButton(event)));

customTipInput.addEventListener('focus', deselectTipButton);