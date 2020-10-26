class Weather {
  constructor(city, country) {
    this.apiKey = 'c04e7d89a4cecbf83f45f9f944d1b585';
    this.city = city;
    this.country = country;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    // .json() is needed to return json, otherwise returns undefined and throws error from app.js

    return responseData;
    // originaly .current_observation, in this API returns whole JSON including array.

  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }

}