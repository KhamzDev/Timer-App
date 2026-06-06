
let displayTime = document.getElementById('displayTime');

const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let [seconds, minutes, hours] = [0,0,0];
let timer = null;


startBtn.addEventListener('click', function startwatch() {
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(workwatch, 1000);
});
stopBtn.addEventListener('click', function stopwatch() {
    clearInterval(timer);
    timer = null;
})
resetBtn.addEventListener('click', function resetwatch() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00"
    timer = null;
})


function workwatch(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds

    displayTime.innerHTML = h + ":" + m + ":" + s
}

