class Weather {
  constructor(state, city) {
    this.apiKey = "9e6e520350msha4e247b2fcc7f2bp1b9fa";
    this.state = state;
    this.city = city;
    // this.host = weatherbit - v1 - mashape.p.rapidapi.com;
  }

  async getWeather() {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${this.city}  ${this.state}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "9e6e520350msha4e247b2fcc7f2bp1b9fa2jsn5a566c11426f",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
        }
      }
    );
    const responseData = await response.json();
    return responseData;
  }
  changeLocation(state, city) {
    this.state = state;
    this.city = city;
  }
}

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "9e6e520350msha4e247b2fcc7f2bp1b9fa2jsn5a566c11426f",
//     "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
//   }
// };

// fetch(
//   "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
