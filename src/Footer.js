import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div>
          Icons made by{" "}
          <a
            href='https://www.flaticon.com/packs/weather-forecast'
            title='Linector'>
            Linector
          </a>{" "}
          from{" "}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href='http://creativecommons.org/licenses/by/3.0/'
            title='Creative Commons BY 3.0'
            target='_blank'
            rel='noopener noreferrer'>
            CC 3.0 BY
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
