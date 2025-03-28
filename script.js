let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10); // Runs every 10ms (0.01s)
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) { // 1000ms = 1s
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    let formattedTime = 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds + ":" + 
        (milliseconds < 100 ? "0" : "") + milliseconds;
    
    document.getElementById("display").textContent = formattedTime;
}
