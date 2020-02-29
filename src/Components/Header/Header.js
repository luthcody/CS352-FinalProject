import React from 'react';
import './Header.css';
import TextField from '@material-ui/core/TextField';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
            <h1 className="title">Animal Tracker</h1>
            <form className="searchForm" noValidate autoComplete="off">
                <TextField className="searchField" id="outlined-basic" label="Search" variant="outlined" />
            </form>
            <div className="icons">
                <SettingsIcon fontSize="large" className="icon"/>
                <AccountCircleIcon fontSize="large" className="icon"/>
            </div>
        </div>
    )
}

export default Header;