let cardNumberElements = document.querySelectorAll('.card__number');
for(let cardNumberElement of cardNumberElements){
    const cardNumber = '3727148598757845';

    numberArray = Array.from(cardNumber);

    for (let i = 0; i < 16; i++) {
        if (i == 3 || i == 7 || i == 11) {
            numberArray[i] = `${numberArray[i]}  `
        }
    }

    const cardNumberSplited = numberArray.join('')

    for (let i=0; i < 16; i++){
        if (i>3 && i < 12) {
            numberArray[i] = '*'
        }

        if (i == 3 || i == 7 || i == 11) {
            numberArray[i] = `${numberArray[i]}  `
        }
    }

    const maskedNumber = numberArray.join('');
    cardNumberElement.innerHTML = maskedNumber;

    cardNumberElement.parentNode.addEventListener('click', showNumber)

    function showNumber(event){
        if (cardNumberElement.classList.contains('hidden')){
            cardNumberElement.innerHTML = cardNumberSplited;
            cardNumberElement.classList.remove('hidden');
            cardNumberElement.classList.add('active');
        }

        else {
            cardNumberElement.innerHTML = maskedNumber;
            cardNumberElement.classList.remove('active');
            cardNumberElement.classList.add('hidden');
        }
    }
}