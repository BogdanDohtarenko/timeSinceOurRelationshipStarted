'use strict';
const startDate = new Date('2023-05-31T20:30:00');
// Здесь задаем начальную дату
const currentTime = new Date();

function updateTimerB() {
    const currentTime = new Date();
    // Получаем текущую дату и время
    const timeDifference = currentTime.getTime() - startDate.getTime();
    // Вычисляем разницу в миллисекундах
    if (timeDifference >= 0) {
        outh.textContent = `${Math.floor(timeDifference / 360000)} часов`;
    } else {
        outh.textContent = "0 часов";
    }
    outd.textContent = `${Math.floor(timeDifference / 86400000)} дней`;
}
function updateTimerS() {
    const currentTime = new Date();
    // Получаем текущую дату и время
    const timeDifference = currentTime.getTime() - startDate.getTime();
    // Вычисляем разницу в миллисекундах
    outms.textContent = `${timeDifference} миллисекунд`;
    outs.textContent = `${Math.floor(timeDifference / 1000)} секунд`;
    outm.textContent = `${Math.floor(timeDifference / 60000)} минут`;
}
function months() {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = currentTime.getFullYear();
    const endMonth = currentTime.getMonth();
    let month = (endYear - startYear) * 12 + (endMonth - startMonth);
    if (currentTime.getDate() < startDate.getDate()) month--;
    return month;
}
function timeMain() {
    const currentTime = new Date();

    let years = 0,
        months = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;

    const timeDifference = currentTime.getTime() - startDate.getTime();
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const startDateOfMonth = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        1
    );
    const endYear = currentTime.getFullYear();
    const endMonth = currentTime.getMonth();

    years = endYear - startYear;
    months = endMonth - startMonth;

    if (endMonth < startMonth) {
        years--;
        months = 12 + months;
    }

    const daysInStartMonth = new Date(
        startDate.getFullYear(),
        startDate.getMonth() + 1,
        0
    ).getDate();

    if (currentTime.getDate() < startDate.getDate()) {
        days = daysInStartMonth - startDate.getDate() + currentTime.getDate();
        if (months > 0) months--;
    } else {
        days = currentTime.getDate() - startDate.getDate();
    }

    hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24; // Ограничиваем часы до 24
    minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    seconds = Math.floor((timeDifference / 1000) % 60);

    const formattedTime = `${padZero(years)}:${padZero(months)}:${padZero(
        days
    )}:${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    outTime.textContent = formattedTime;
} 

function padZero(value) {
    return value.toString().padStart(2, "0");
}
const outms = document.querySelector('.timer .ms');
const outs = document.querySelector('.timer .s');
const outm = document.querySelector('.timer .m');
const outh = document.querySelector('.timer .h');
const outd = document.querySelector('.timer .d');
const outmon = document.querySelector('.timer .mon');

const outTime = document.querySelector('.time p');


setInterval(timeMain, 1000);
updateTimerB();
outmon.textContent = `${months(startDate, currentTime)} месяцев`;
setInterval(updateTimerS, 90);
setInterval(updateTimerB, 30000);


