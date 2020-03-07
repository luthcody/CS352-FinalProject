import React, {Component} from 'react';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './AnimalItem.css'

class AnimalItem extends Component {
    constructor() {
        super();
        this.markerFocus = this.markerFocus.bind(this);
    }

    markerFocus() {
        this.props.markerFocus(this.props.gpsCoord);
    }

    render() {
        return (
            <div className="animalItemContainer" onClick={this.markerFocus}>
                <div className="roomIcon" style={{color: this.props.color}}><RoomIcon fontSize='large'/></div>
                <div className="animalName"><h1>{this.props.name}</h1></div>
                <div className="moreVertIcon"><MoreVertIcon fontSize='large'/></div>
            </div>
        )
    }
}

export default AnimalItem