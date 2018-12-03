import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    return (
      <div className='dropdown'>
        <button
          className='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'>
          Select City
        </button>

        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          <button
            className='dropdown-item'
            onClick={() => this.props.handler("whitehorse%2C%20yk")}>
            Whitehorse, YK
          </button>

          <button
            className='dropdown-item'
            onClick={() => this.props.handler("vancouver%2C%20bc")}>
            Vancouver, BC
          </button>

          <button
            className='dropdown-item'
            onClick={() => this.props.handler("cold%20lake%2C%20ab")}>
            Cold Lake, AB
          </button>

          <button
            className='dropdown-item'
            onClick={() => this.props.handler("moose%20jaw%2C%20sk")}>
            Moose Jaw, SK
          </button>

          <button
            className='dropdown-item'
            onClick={() => this.props.handler("ottawa%2C%20on")}>
            Ottawa, ON
          </button>

          <button
            className='dropdown-item'
            onClick={() => this.props.handler("montreal%2C%20qc")}>
            Montreal, QC
          </button>

          <button
            className='dropdown-item'
            onClick={() => this.props.handler("halifax%2C%20ns")}>
            Halifax, NS
          </button>
        </div>
      </div>
    );
  }
}

export default Dropdown;
