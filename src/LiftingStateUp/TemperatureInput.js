import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};
export class TemperatureInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: '',
    };
  }

  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }
  render() {
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input type="number" onChange={this.handleChange} value={temperature} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
