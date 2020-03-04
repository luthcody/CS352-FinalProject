import React, { Component } from 'react';
import './Header.css';
import TextField from '@material-ui/core/TextField';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CustomModal from '../Modal/Modal';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            settingsModalOpen: false,
            accountModalOpen: false
        }
    }

    render() {
        var settingsPopup = (
            <h1>This is a popup</h1>
        )

        var accountPopup = (
            <h1>This is a 2nd popup</h1>
        )
        
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

                <CustomModal open={this.state.settingsModalOpen} onClose={() => this.setState({ settingsModalOpen: false})} title="Settings" content={settingsPopup}/>
                <CustomModal open={this.state.accountModalOpen} onClose={() => this.setState({ accountModalOpen: false})} title="Account" content={accountPopup}/>

            </div>
        )
    }
}

export default Header;