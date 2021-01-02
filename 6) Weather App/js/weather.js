class Weather {
  constructor(city, country) {
    this.apiKey = 'e5dcbe390ce139e4c110d9276ce56dd3';
    this.city = city;
    this.country = country;
  }

  // Fetch weather data from the api
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`
    );
    const responseData = response.json();

    return responseData;
  }

  // Change location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
