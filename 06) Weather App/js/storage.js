class Storage {
  constructor() {
    this.city;
    this.country;
  }

  getLocation() {
    if (localStorage.getItem('city') !== null) {
      this.city = localStorage.getItem('city');
    }
    if (localStorage.getItem('country') !== null) {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocation(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}