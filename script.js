const clock = document.querySelector('.clock')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

hour.textContent = 0;
minute.textContent = 0;
second.textContent = 0;


const showDate = function(){
    /* const seconds = today.getSeconds()
    second.textContent = Number(seconds); */
    const today = new Date()
    const seconds = today.getSeconds()
    second.textContent = Number(seconds);
    const minutes = today.getMinutes()
    minute.textContent = minutes;
    const hours = today.getHours()
    hour.textContent = hours;

};

setInterval(showDate, 1000)