const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.state, weatherLocation.city);

const ui = new UI();
document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;

  weather.changeLocation(state, city);
  getWeather();

  storage.setLocationData(state, city);

  //   close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((res) => {
      console.log(res);
      ui.paint(res);
    })
    .catch((err) => console.log(err));
}
