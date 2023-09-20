const redButton = document.getElementById('red');
const yellowButton = document.getElementById('blue');
const greenButton = document.getElementById('green');

redButton.addEventListener('click', () => changeBackgroundColor('red'));
yellowButton.addEventListener('click', () => changeBackgroundColor('blue'));
greenButton.addEventListener('click', () => changeBackgroundColor('green'));

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}