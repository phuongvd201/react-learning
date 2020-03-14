import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value: ''
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was summited: ' + this.state.value);
        event.preventDefaults();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                </input>
                <input type="submit" value="submit"></input>
            </form>
        );
    }
}

export default NameForm;