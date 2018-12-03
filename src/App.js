import React, { Component } from "react";
import weatherBanner from "./weather-banner.jpg";
import "./App.css";
import CitySelect from "./CitySelect.js";
import BuildForecast from "./BuildForcast.js";
import Footer from "./Footer";

const axios = require("axios");
//let citySelected = "";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: [],
      haveCity: false,
      citySelected: ''
    };

    this.handler = this.handler.bind(this);
  }

  createYahooWeatherUrl() {
    //let city = citySelected;
    let url =
      "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D'" +
      this.state.citySelected +
      "')and%20u='c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    return url;
  }

  getWeather() {
    const url = this.createYahooWeatherUrl();

    axios
      .get(url)
      .then(response => {
        this.setState({ weather: response.data.query.results.channel });
        this.setState({ haveCity: true });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }

  handler(city) {
    this.setState({citySelected: city}, () => this.getWeather);
  }

  render() {
    let weatherReport;

    if (this.state.haveCity) {
      weatherReport = <BuildForecast weather={this.state.weather} />;
    } else {
      weatherReport = <h3>Select a location from the dropdown</h3>;
    }

    return (
      <div className='App'>
        <img src={weatherBanner} alt='weather-banner' />
        <div className='spacer' />
        <CitySelect handler={this.handler} />
        {weatherReport}
        <div className='spacer' />
        <Footer />
      </div>
    );
  }
}

export default App;
