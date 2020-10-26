// init storage
const storage = new Storage();
// gte stored location data
const weatherLocation = storage.getLocationData();

// init UI
const ui = new Ui();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Get weather on DOM load
document.addEventListener('DOMcontentLoaded', getWeather());

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // change location
  weather.changeLocation(city, country);

  // set location in LS
  storage.setLocationData(city, country);

  // Get and display weather

  getWeather();
  // close modal
  $(`#locModal`).modal('hide');
  });




function getWeather() {
weather.getWeather()
.then(results => {
  console.log(results); 
  ui.paint(results);
})
.catch(err => console.log(err));
}
