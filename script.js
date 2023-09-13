const minutes_el = document.querySelector("#minutes")
const seconds_el = document.querySelector("#seconds")
const miliseconds_el = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let is_paused = false;

startBtn.addEventListener("click", start_timer);
pauseBtn.addEventListener("click", pause_time);
resumeBtn.addEventListener("click", resume_time)
resetBtn.addEventListener("click", reset_time);

function start_timer() {
    interval = setInterval(() => {
        if(!is_paused) {
            miliseconds += 10
            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }
            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }
            minutes_el.textContent = format_time(minutes);
            seconds_el.textContent = format_time(seconds);
            miliseconds_el.textContent = format_miliseconds(miliseconds);
        }
    }, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pause_time() {
    is_paused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resume_time() {
    is_paused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function reset_time() {
    is_paused = false;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutes_el.textContent = "00"
    seconds_el.textContent = "00"
    miliseconds_el.textContent = "000"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
}

function format_time(time) {
    return time < 10 ? `0${time}` : time;
}

function format_miliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}