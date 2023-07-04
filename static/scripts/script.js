const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const Comeco = "01 Aug 2023"

function countdown(){

    const comecoDate = new Date(Comeco);
    const currentDate = new Date();

    const totalSeconds = (comecoDate - currentDate)/ 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600)% 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);


}

function formatTime(time)
{
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);