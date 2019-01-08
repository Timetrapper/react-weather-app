import React, { Component } from "react";
import WeatherImage from "./WeatherImage.js";
import CloudIcon from "./weather-icons/cloud.png";
import ColdIcon from "./weather-icons/cold.png";
import HotIcon from "./weather-icons/hot.png";
import RainIcon from "./weather-icons/rain.png";
import SnowIcon from "./weather-icons/snow.png";
import StormIcon from "./weather-icons/storm.png";
import SunIcon from "./weather-icons/sun.png";
import WindIcon from "./weather-icons/wind.png";
import NightCloudyIcon from "./weather-icons/night-cloudy.png";
import NightFairIcon from "./weather-icons/night-fair.png";
import UnexpectedConditionsIcon from "./weather-icons/unexpected.png";

class BuildForecast extends Component {
  iconSelector(condition) {
    let icon = {};
    let name = "";
    condition = condition.toLowerCase();

    if (
      condition === "cloudy" ||
      condition === "partly cloudy" ||
      condition === "dust" ||
      condition === "foggy" ||
      condition === "haze" ||
      condition === "smoky" ||
      condition === "mostly cloudy" ||
      condition === "mostly cloudy (day)" ||
      condition === "partly cloudy (day)" ||
      condition === "partly cloudy"
    ) {
      icon = CloudIcon;
      name = "cloudy";
    } else if (
      condition === "stormy" ||
      condition === "isolated thundershowers" ||
      condition === "thundershowers" ||
      condition === "isolated thunderstorms" ||
      condition === "scattered thunderstorms" ||
      condition === "mixed rain and hail" ||
      condition === "tropical storm" ||
      condition === "hurricane" ||
      condition === "severe thunderstorms" ||
      condition === "thunderstorms"
    ) {
      icon = StormIcon;
      name = "storm";
    } else if (condition === "cold") {
      icon = ColdIcon;
      name = "cold";
    } else if (condition === "hot") {
      icon = HotIcon;
      name = "hot";
    } else if (
      condition === "rain" ||
      condition === "freezing drizzle" ||
      condition === "drizzle" ||
      condition === "freezing rain" ||
      condition === "showers" ||
      condition === "scattered showers"
    ) {
      icon = RainIcon;
      name = "rainy";
    } else if (
      condition === "sun" ||
      condition === "sunny" ||
      condition === "fair (day)" ||
      condition === "partly sunny" ||
      condition === "mostly sunny"
    ) {
      icon = SunIcon;
      name = "sunny";
    } else if (
      condition === "rain and snow" ||
      condition === "mixed rain and snow" ||
      condition === "mixed rain and sleet" ||
      condition === "mixed snow and sleet" ||
      condition === "snow" ||
      condition === "hail" ||
      condition === "light snow showers" ||
      condition === "blowing snow" ||
      condition === "sleet" ||
      condition === "heavy snow" ||
      condition === "scattered snow showers" ||
      condition === "snow showers"
    ) {
      icon = SnowIcon;
      name = "snow";
    } else if (
      condition === "wind" ||
      condition === "high wind" ||
      condition === "tornado" ||
      condition === "blustery" ||
      condition === "windy"
    ) {
      icon = WindIcon;
      name = "wind";
    } else if (
      condition === "mostly cloudy (night)" ||
      condition === "partly cloudy (night)"
    ) {
      icon = NightCloudyIcon;
      name = "night-cloudy";
    } else if (
      condition === "clear (night)" ||
      condition === "fair (night)" ||
      condition === "clear" ||
      condition === "mostly clear" ||
      condition === "fair"
    ) {
      icon = NightFairIcon;
      name = "night-fair";
    } else {
      icon = UnexpectedConditionsIcon;
      name = "unexpected-conditons";
    }

    return <WeatherImage image={icon} name={name} />;
  }

  currentConditionsBuilder() {
    const weather = this.props.weather;
    let condition = weather.item.condition.text;

    return (
      <React.Fragment>
        <h3>The {weather.description} is:</h3>
        <br />
        <div className='currentConditions'>
          <div>
            <h4 align='left'>
              Current Conditions for {weather.item.condition.date}
            </h4>
          </div>
          <table className='table'>
            <tbody>
              <tr align='center'>
                <th rowSpan='3' width='40%'>
                  {this.iconSelector(condition)}
                </th>
              </tr>
              <tr align='left'>
                <td>
                  <b>{condition}</b>
                </td>
              </tr>
              <tr align='left'>
                <td>
                  <b>{weather.item.condition.temp} &#176;C</b>
                </td>
                <td>
                  <b>Wind: {weather.wind.speed} km/h</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

  forecastedConditionsBuilder() {
    const weather = this.props.weather;

    return (
      <React.Fragment>
        <h4 align='left'>Forecasted Conditions</h4>
        <br />
        <div className='forecastedConditions'>
          {weather.item.forecast.map(day => (
            <div key={day.date}>
              <h5 align='left'>{day.date}</h5>
              <table className='table'>
                <tbody>
                  <tr align='center'>
                    <th rowSpan='3' width='40%'>
                      {this.iconSelector(day.text)}
                    </th>
                  </tr>
                  <tr align='left'>
                    <td>
                      <b>{day.text}</b>
                    </td>
                  </tr>
                  <tr align='left'>
                    <td>
                      <b>High: {day.high} &#176;C</b>
                      <br/>
                      <b>Low: {day.low} &#176;C</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className='forecast'>
        {this.currentConditionsBuilder()}
        {this.forecastedConditionsBuilder()}
      </div>
    );
  }
}

export default BuildForecast;
