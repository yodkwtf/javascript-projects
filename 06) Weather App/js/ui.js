class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.description = document.getElementById('description');
    this.temperature = document.getElementById('temperature');
    this.maxTemp = document.getElementById('max-temp');
    this.minTemp = document.getElementById('min-temp');
    this.icon = document.getElementById('icon');
    this.windSpeed = document.getElementById('wind-speed');
    this.humidity = document.getElementById('humidity');
    this.pressure = document.getElementById('pressure');
    this.feelsLike = document.getElementById('feels-like');
  }

  showWeather(data) {
    this.location.innerHTML = `${data.name}, ${data.sys.country}`;
    this.description.innerHTML = data.weather[0].main;
    this.temperature.innerHTML = `${data.main.temp}&#730;C`;
    this.maxTemp.innerHTML = `Max temp: ${data.main.temp_max}&#730;C`;
    this.minTemp.innerHTML = `Min temp: ${data.main.temp_min}&#730;C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    // Displaying ul
    document.getElementById('details').style.display = 'block';
    this.windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/sec`;
    this.humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    this.pressure.innerHTML = `Pressure: ${data.main.pressure} atm`;
    this.feelsLike.innerHTML = `Feels Like: ${data.main.feels_like}&#730;C`;
  }
}