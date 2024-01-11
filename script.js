

var daysHead = document.querySelector('.days');
var hourHead = document.querySelector('.hours');
var minuteHead = document.querySelector('.minutes');
var secondHead = document.querySelector('.seconds');
var secondCard = document.querySelector('#second');
var minuteCard = document.querySelector('#minute');
var hourCard = document.querySelector('#hour');

let days;
let hours;
let minutes;
let seconds;

var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysHead.innerHTML = days;
    hourHead.innerHTML = hours;
    minuteHead.innerHTML = minutes;
    secondHead.innerHTML = seconds;

    if (distance < 0) {
        daysHead.innerText = "EX";
        hourHead.innerText = "PI";
        minuteHead.innerText = 'R';
        secondHead.innerText = 'ED';
    }

    if (seconds < 1) {
        secondCard.classList.add('active');
    }

    if (minutes < 1) {
        minuteCard.classList.add('active');
    }

    if (hours < 1) {
        hourCard.classList.add('active');
    }

}, 1000);
