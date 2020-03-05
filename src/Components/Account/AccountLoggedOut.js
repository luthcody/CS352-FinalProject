import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './Account.css';

class AccountLoggedOut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            usernameError: false,
            usernameHelpText: "",
            password: "",
            passwordError: false,
            passwordHelpText: ""
        }

        this.Login = this.Login.bind(this);
        this.HandleUsernameFieldChange = this.HandleUsernameFieldChange.bind(this);
        this.HandlePasswordFieldChange = this.HandlePasswordFieldChange.bind(this);

    }

    HandleUsernameFieldChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    HandlePasswordFieldChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    Login() {
        if (this.state.username.length === 0) {
            this.setState({usernameError: true, usernameHelpText: "Username cannot be empty"});
            return;
        } else {
            this.setState({usernameError: false, usernameHelpText: ""});
        }

        if (this.state.password.length === 0) {
            this.setState({passwordError: true, passwordHelpText: "Password cannot be empty"});
            return;
        } else {
            this.setState({passwordError: false, passwordHelpText: ""});
        }

        if (this.state.username === "group6" && this.state.password === "password") {
            this.props.login(this.state.username);
        } else {
            this.setState({usernameError: true, passwordError: true, passwordHelpText: "Username or Password Incorrect."});
        }
    }

    render() {
        return (
            <div>
                <div className="accountLoggedOut">
                    <div className="inputField">
                        <h2 className="text">Username:</h2>
                        <TextField id="input" error={this.state.usernameError} helperText={this.state.usernameHelpText} onChange={this.HandleUsernameFieldChange} variant="outlined" />
                    </div>
                    <div className="inputField">
                        <h2 className="text">Password:</h2>
                        <TextField id="input" type="password" error={this.state.passwordError} helperText={this.state.passwordHelpText} onChange={this.HandlePasswordFieldChange} variant="outlined" />
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={this.Login}>Log In</button>
                </div>
            </div>
        )
    }
}

export default AccountLoggedOut;