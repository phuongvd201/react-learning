import React from 'react';
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 1 };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillMount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
    this.setState({ counter: this.state.counter + this.props.increment });
  }
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>It is {this.state.counter}.</h2>
      </div>
    );
  }
}
