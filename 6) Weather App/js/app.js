// Instantiate Storage and get location from LS
const storage = new Storage();
const locationLS = storage.getLocation();
// Instantiate UI
const ui = new UI();
// Instantiate Weather
const weather = new Weather(locationLS.city, locationLS.country);


// Event Listener for when DOM loads
if(locationLS.city !== undefined) {   // checking if city is stored in LS only then get weather on page load
  document.addEventListener('DOMContentLoaded', getWeather);
}


// FUNCTION - Getting Weather
function getWeather() {
  weather.getWeather()
  .then( data => {
    ui.showWeather(data);
  })
  .catch(err => {
    console.log(err);
  });
}


// For Modal

// defining variables
const changeBtn = document.getElementById('change-btn');
const modalOverlay = document.getElementById('modal-overlay');
const cancelBtn = document.getElementById('cancel-btn');
const saveBtn = document.getElementById('save-btn');
const inputCity = document.getElementById('city');
const inputCountry = document.getElementById('country');

// event listeners

changeBtn.addEventListener('click', () => {
  modalOverlay.classList.add('open-modal');
});
cancelBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modalOverlay.classList.remove('open-modal');
});

saveBtn.addEventListener('click', (e) => {
  // 1) Prevent default
  e.preventDefault();
  // 2) Check if input fields are empty
  if (inputCity.value !== '' && inputCountry.value !== '') {
    // 3) Get input value
    const city = inputCity.value;
    const country = inputCountry.value;
    // 4) Set new location
    weather.changeLocation(city, country);
    // 5) Save new location in LS
    storage.setLocation(city, country);
    // 6) Clear input fields
    inputCity.value = '';
    inputCountry.value = '';
    // 7) Get weather
    getWeather();
    // 8) Change btn text
    changeBtn.innerHTML = 'change location';
    // 9) Close modal
    modalOverlay.classList.remove('open-modal');
  } else {
    alert('Please enter valid details')
  }
});
