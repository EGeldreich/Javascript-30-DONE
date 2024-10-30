// Selectors
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date(); // get time data
    const seconds = now.getSeconds(); // get seconds from the data

    // Transform seconds into degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // change css accordingly
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // minutes
    const minutes = now.getMinutes();
    const minutesDegrees =((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // hours
    const hours = now.getHours();
    const hoursDegrees =((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);