import React, {Component} from 'react';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './AnimalItem.css'

class AnimalItem extends Component {
    render() {
        return (
            <div className="animalItemContainer">
                <div className="roomIcon" style={{color: this.props.color}}><RoomIcon fontSize='large'/></div>
                <div className="animalName"><h1>{this.props.name}</h1></div>
                <div className="moreVertIcon"><MoreVertIcon fontSize='large'/></div>
            </div>
        )
    }
}

export default AnimalItem