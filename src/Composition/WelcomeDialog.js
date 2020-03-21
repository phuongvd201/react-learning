import React, { Component } from 'react';

export class FancyBorder extends Component {
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

export class WelcomeDialog extends Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1>Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </FancyBorder>
    );
  }
}

export class SplitPanel extends Component {
  render() {
    return (
      <div className="SplitPanel">
        <div className="SplitPanel-left">{this.props.left}</div>
        <div className="SplitPanel-right">{this.props.right}</div>
      </div>
    );
  }
}
