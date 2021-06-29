// weekdays
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// months
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// get elements
const hourHand = document.getElementById('hour-hand');
const minHand = document.getElementById('min-hand');
const secHand = document.getElementById('sec-hand');
const today = document.querySelector('.today');

// runClock FUNCTIONS
const runClock = () => {
  const time = new Date();

  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getUTCMonth();

  const secAngle = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secAngle}deg)`;

  const minAngle = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minAngle}deg)`;

  const hourAngle = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;

  // console.log(hour, min, sec);
  today.innerHTML = `
    <h2>${updateDigits(hour)}:${updateDigits(min)}</h2>
    <h4>${weekdays[day]}, ${date} ${months[month]}</h4>
  `;
};

// updateDigits FUNCTION
const updateDigits = (digit) => {
  if (digit < 10) {
    return `0${digit}`;
  }
  return digit;
};

// runClock every second
setInterval(runClock, 1000);
