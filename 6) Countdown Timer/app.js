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
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// getting elements from html
const finalInfo = document.querySelector('.final-info');
const countdown = document.querySelector('.countdown');
const countItems = document.querySelectorAll('.count-item h4');

// setting up final date
const finalDate = new Date(2021, 0, 1, 0, 00, 00);

// extracting time inputs from final date
const weekday = weekdays[finalDate.getDay()],
  date = finalDate.getDate(),
  month = months[finalDate.getMonth()],
  year = finalDate.getFullYear();
// hours = finalDate.getHours(),
// mins = finalDate.getMinutes();

// setting up final date info
finalInfo.textContent = `
celebrate the new year with us on ${weekday}, ${date} ${month} ${year} `;

// FUNCTION - to get and update remaining time
function getRemainingTime() {
  // 0) getting final/current time and their diif in milliseconds
  const finalTime = finalDate.getTime();
  const curTime = new Date().getTime();
  const time = finalTime - curTime;
  // console.log(time);

  // number of milliseconds in ->
  // 1sec=1000ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // 1) using milliseconds to calculate left :-
  const days = Math.floor(time / oneDay);
  const hours = Math.floor((time % oneDay) / oneHour);
  const mins = Math.floor((time % oneHour) / oneMin);
  const secs = Math.floor((time % oneMin) / 1000);

  // 2) setting values in array
  const values = [days, hours, mins, secs];

  // 3) updating countdown time in dom
  countItems.forEach(function (item, index) {
    item.innerHTML = updateDigits(values[index]);
  });

  // 4)when time has passed
  if (time < 0) {
    // stop interval
    clearInterval(interval);
    countdown.innerHTML = `<h3>You were late for the New Year party :/</h3>`;
  }
}
// calling function every second
const interval = setInterval(getRemainingTime, 1000);
getRemainingTime();

// FUNCTION - to convert one digit nums to 2 digit
function updateDigits(digit) {
  if (digit < 10) {
    return `0${digit}`;
  }
  return digit;
}
