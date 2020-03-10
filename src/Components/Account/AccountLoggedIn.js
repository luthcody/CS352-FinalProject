import React, { Component } from 'react';
import './Account.css';

class AccountLoggedIn extends Component {
    render() {
        return (
            <div>
                <div className="accountLoggedIn">
                    <h2>Currently logged in as:</h2>
                    <h2 className="username">{this.props.getUserName}</h2>
                </div>
                <div className="buttons">
                    <button disabled>Account Settings</button>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            </div>
        )
    }
}

export default AccountLoggedIn;