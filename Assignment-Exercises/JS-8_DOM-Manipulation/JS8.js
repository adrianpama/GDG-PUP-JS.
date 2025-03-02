const counterText = document.getElementById('counter-text');
const addButton = document.getElementById('button-add');
const subtractButton = document.getElementById('button-subtract');

console.log('Elements:', counterText, addButton, subtractButton);

let counterValue = 0;

addButton.addEventListener('click', function() {
    console.log('Add button clicked');
    counterValue++;
    counterText.textContent = counterValue;
});

subtractButton.addEventListener('click', function() {
    console.log('Subtract button clicked');
    if (counterValue > 0) {
        counterValue--;
        counterText.textContent = counterValue;
    }
});
