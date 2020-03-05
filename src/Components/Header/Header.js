import React, { Component } from 'react';
import './Header.css';
import TextField from '@material-ui/core/TextField';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CustomModal from '../CustomModal/CustomModal';
import Settings from '../Settings/Settings';
import AccountLoggedIn from '../Account/AccountLoggedIn';
import AccountLoggedOut from '../Account/AccountLoggedOut';

class Header extends Component {
    constructor(props) {
        super(props);

        this.Logout = this.Logout.bind(this);
        this.Login = this.Login.bind(this);
        this.AccountInit = this.AccountInit.bind(this);

        this.state = {
            settingsModalOpen: false,
            accountModalOpen: false
        }
    }

    Logout() {
        this.props.updateLogin(false, "");
    }
    
    Login(username) {
        this.props.updateLogin(true, username);
    }

    AccountInit() {
        if (this.props.getLoginStatus) {
            return (<AccountLoggedIn logout={this.Logout} getUserName={this.props.getUserName}/>)
        } else {
            return (<AccountLoggedOut login={(username) => this.Login(username)}/>)
        }
    }

    render() {
        var test = this.AccountInit();

        return (
            <div className="header">
                <h1 className="title">Animal Tracker</h1>
                <form className="searchForm" noValidate autoComplete="off">
                    <TextField className="searchField" id="outlined-basic" label="Search" variant="outlined" />
                </form>
                <div className="icons">
                    <SettingsIcon fontSize="large" className="icon" onClick={() => this.setState({ settingsModalOpen: true })}/>
                    <AccountCircleIcon fontSize="large" className="icon" onClick={() => this.setState({ accountModalOpen: true })}/>
                </div>

                <CustomModal open={this.state.settingsModalOpen} onClose={() => this.setState({ settingsModalOpen: false})} title="Settings" content={<Settings />}/>
                <CustomModal open={this.state.accountModalOpen} onClose={() => this.setState({ accountModalOpen: false})} title="Account" content={test}/>

            </div>
        )
    }
}

export default Header;