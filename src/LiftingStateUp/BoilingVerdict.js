import React, { Component } from 'react';

export default class BoilingVerdict extends Component {
  render() {
    return this.props.celsius > 100 ? (
      <p>The water would boil</p>
    ) : (
      <p>The water would not boil</p>
    );
  }
}
