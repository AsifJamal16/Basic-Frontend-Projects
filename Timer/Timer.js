let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        display.innerHTML = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerHTML = '00:00:00';
    startButton.disabled = false;
    stopButton.disabled = true;
}

function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}