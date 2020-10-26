class Ui {
  constructor() {
    // change this to apis parameters, and do same  in html
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    let iconcode = weather.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/w/${iconcode}.png`;
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `Temperatue: ${weather.main.temp} C`;
    this.icon.setAttribute('src', iconUrl);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} g/kg`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} C`;
    this.pressure.textContent =`Pressure: ${weather.main.pressure} Pa`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} km/h`;
  }

}