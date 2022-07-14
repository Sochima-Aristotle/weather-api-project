class Storage {
  constructor() {
    this.state;
    this.city;
    this.defaultState = "Lagos";
    this.defaultCity = "Berger";
  }
  getLocationData() {
    if (localStorage.getItem("state") === null) {
      this.state = this.defaultCity;
    } else {
      this.city = localStorage.getItem("state");
    }
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    return {
      state: this.state,
      city: this.city
    };
  }
  setLocationData(state, city) {
    localStorage.setItem("state", state);
    localStorage.setItem("city", city);
  }
}
