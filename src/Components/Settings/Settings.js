import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
    render() {
        return (
            <div>
                <div className="settings">
                    <div className="settingsOption">
                        <h2 className="settingsTitle">Sort List: </h2>
                        <select className="select" disabled>
                            <option>Oldest First</option>
                            <option>Alphabetically</option>
                            <option>Recently Added</option>
                        </select>
                    </div>
                    <div className="settingsOption">
                        <h2 className="settingsTitle">Map Type: </h2>
                        <select className="select" disabled>
                            <option>Street View</option>
                            <option>Satellite</option>
                            <option>Terrain</option>
                        </select>
                    </div>
                </div>
                <div className="buttons">
                    <button className="settingsButtons" disabled>Save</button>
                </div>
            </div>

        )
    }
}

export default Settings;