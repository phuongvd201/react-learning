import React, { Component } from 'react';
export class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<button onClick={this.props.onClick}>Logout</button>);
    }
}
