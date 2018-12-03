import React, { Component } from "react";

class WeatherImage extends Component {
  render() {
    return <img style={{ width: 100 }} src={this.props.image} alt={this.props.name} />;
  }
}

export default WeatherImage;
