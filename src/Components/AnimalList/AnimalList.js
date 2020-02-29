import React, {Component} from 'react';
import AnimalItem from './AnimalItem';
import ReplayIcon from '@material-ui/icons/Replay';
import AddIcon from '@material-ui/icons/Add';
import './AnimalList.css';

class AnimalList extends Component {
    constructor() {
        super()
        this.state = {
            name: "Animal #1",
            nearAddress: "1234 Nulla St. Mississippi 96522",
            gpsCoord: "N40° 44.9064', W073° 59.0735'",
            lastUpdate: "May 13, 2014 11:30:00 PM PST"
        }
    }

    render() {
        return (
            <div>
                <div className="animalHeader">
                    <div className="myAnimals"><h1>My Animals</h1></div>
                    <div className="replayIcon"><ReplayIcon fontSize='large'/></div>
                    <div className="addIcon"><AddIcon fontSize='large'/></div>
                </div>
                <AnimalItem name={this.state.name.substring(0,10)} nearAddress={this.state.nearAddress} gpsCoord={this.state.gpsCoord} lastUpdate={this.state.lastUpdate} />
            </div>
        )
    }
}

export default AnimalList