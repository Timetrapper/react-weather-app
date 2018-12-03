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
    let icon = "";
    let name = "";
    let conditionLowerCase = condition.toLowerCase();

    if (
      conditionLowerCase === "cloudy" ||
      conditionLowerCase === "partly cloudy" ||
      conditionLowerCase === "dust" ||
      conditionLowerCase === "foggy" ||
      conditionLowerCase === "haze" ||
      conditionLowerCase === "smoky" ||
      conditionLowerCase === "mostly cloudy" ||
      conditionLowerCase === "mostly cloudy (day)" ||
      conditionLowerCase === "partly cloudy (day)" ||
      conditionLowerCase === "partly cloudy"
    ) {
      icon = CloudIcon;
      name = "cloudy";
    } else if (
      conditionLowerCase === "stormy" ||
      conditionLowerCase === "isolated thundershowers" ||
      conditionLowerCase === "thundershowers" ||
      conditionLowerCase === "isolated thunderstorms" ||
      conditionLowerCase === "scattered thunderstorms" ||
      conditionLowerCase === "mixed rain and hail" ||
      conditionLowerCase === "tropical storm" ||
      conditionLowerCase === "hurricane" ||
      conditionLowerCase === "severe thunderstorms" ||
      conditionLowerCase === "thunderstorms"
    ) {
      icon = StormIcon;
      name = "storm";
    } else if (conditionLowerCase === "cold") {
      icon = ColdIcon;
      name = "cold";
    } else if (conditionLowerCase === "hot") {
      icon = HotIcon;
      name = "hot";
    } else if (
      conditionLowerCase === "rain" ||
      conditionLowerCase === "freezing drizzle" ||
      conditionLowerCase === "drizzle" ||
      conditionLowerCase === "freezing rain" ||
      conditionLowerCase === "showers" ||
      conditionLowerCase === "scattered showers"
    ) {
      icon = RainIcon;
      name = "rainy";
    } else if (
      conditionLowerCase === "sun" ||
      conditionLowerCase === "sunny" ||
      conditionLowerCase === "fair (day)" ||
      conditionLowerCase === "partly sunny" ||
      conditionLowerCase === "mostly sunny"
    ) {
      icon = SunIcon;
      name = "sunny";
    } else if (
      conditionLowerCase === "rain and snow" ||
      conditionLowerCase === "mixed rain and snow" ||
      conditionLowerCase === "mixed rain and sleet" ||
      conditionLowerCase === "mixed snow and sleet" ||
      conditionLowerCase === "snow" ||
      conditionLowerCase === "hail" ||
      conditionLowerCase === "light snow showers" ||
      conditionLowerCase === "blowing snow" ||
      conditionLowerCase === "sleet" ||
      conditionLowerCase === "heavy snow" ||
      conditionLowerCase === "scattered snow showers" ||
      conditionLowerCase === "snow showers"
    ) {
      icon = SnowIcon;
      name = "snow";
    } else if (
      conditionLowerCase === "wind" ||
      conditionLowerCase === "high wind" ||
      conditionLowerCase === "tornado" ||
      conditionLowerCase === "blustery" ||
      conditionLowerCase === "windy"
    ) {
      icon = WindIcon;
      name = "wind";
    } else if (
      conditionLowerCase === "mostly cloudy (night)" ||
      conditionLowerCase === "partly cloudy (night)"
    ) {
      icon = NightCloudyIcon;
      name = "night-cloudy";
    } else if (
      conditionLowerCase === "clear (night)" ||
      conditionLowerCase === "fair (night)"
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
                    </td>
                    <td>
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
    let currentConditions = this.currentConditionsBuilder();
    let forecastedConditions = this.forecastedConditionsBuilder();

    return (
      <div className='forecast'>
        {currentConditions}
        {forecastedConditions}
      </div>
    );
  }
}

export default BuildForecast;
