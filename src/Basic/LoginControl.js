import React, { Component } from 'react'
import { LogoutButton } from './LogoutButton';
import { LoginButton } from './LoginButton';


export class LoginControl extends Component {

    constructor(props) {
        super(props)

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (!isLoggedIn) {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        else {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        }

        return (
            <div>
                {button}
            </div>
        )
    }
}
