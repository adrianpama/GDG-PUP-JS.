// your code starts here
const counterText = document.getElementById('counter-text');
const addButton = document.getElementById('button-add');
const subtractButton = document.getElementById('button-subtract');

let counterValue = 0;

addButton.addEventListener('click', function() {
    counterValue++;
    counterText.textContent = counterValue;
});

subtractButton.addEventListener('click', function() {
    if (counterValue > 0) {
        counterValue--;
        counterText.textContent = counterValue;
    }
});
