import {} from './WelcomeDialog';
import { TemperatureInput } from './TemperatureInput';
import React, { Component } from 'react';

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.onCelsiusTemperatureChange = this.onCelsiusTemperatureChange.bind(
      this,
    );
    this.onFahrenheitTemperatureChange = this.onFahrenheitTemperatureChange.bind(
      this,
    );
    this.state = {
      temperature: '',
      scale: '',
    };
  }

  toFahrenheit(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  toCelsius(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
  }

  onFahrenheitTemperatureChange(value) {
    this.setState((state, props) => {
      return { temperature: value, scale: 'f' };
    });
  }

  onCelsiusTemperatureChange(value) {
    this.setState((state, props) => {
      return { temperature: value, scale: 'c' };
    });
  }

  render() {
    const { temperature, scale } = this.state;

    return (
      <div>
        <TemperatureInput
          scale="c"
          onTemperatureChange={this.onCelsiusTemperatureChange}
          temperature={
            scale === 'c'
              ? temperature
              : this.tryConvert(temperature, this.toFahrenheit)
          }
        />
        <TemperatureInput
          scale="f"
          onTemperatureChange={this.onFahrenheitTemperatureChange}
          temperature={
            scale === 'f'
              ? temperature
              : this.tryConvert(temperature, this.toCelsius)
          }
        />
      </div>
    );
  }
}

export default Calculator;
