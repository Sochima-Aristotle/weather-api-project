class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.datails = document.getElementById("w-datails");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
    this.wind_dir = document.getElementById("w-wind_dir");
  }
  paint(weather) {
    this.location.textContent = weather.location.name;
    this.desc.textContent = weather.current.cloud;
    this.string.textContent = weather.current.temp_c;
    this.icon.setAttribute("src", weather.current.condition.icon);
    this.humidity.textContent = `Relative humidity ${weather.current.humidity}`;
    this.feelsLike.textContent = `feels Like ${weather.current.feelslike_c}`;
    this.dewpoint.textContent = `Relative dewpoint ${weather.current.precip_mm}`;
    this.wind.textContent = `Relative wind ${weather.current.wind_degree}`;
    this.wind_dir.textContent = `Relative wind direction ${weather.current.wind_dir}`;
  }
}
