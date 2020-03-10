import React, {Component} from 'react';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popover, {ArrowContainer} from 'react-tiny-popover';
import './AnimalItem.css'

class AnimalItem extends Component {
    constructor() {
        super();
        this.state = {
            isPopoverOpen: false
        }
        this.markerFocus = this.markerFocus.bind(this);
        this.deleteAnimal = this.deleteAnimal.bind(this);
    }

    markerFocus() {
        this.props.markerFocus(this.props.gpsCoord);
    }

    deleteAnimal() {
        this.props.delete(this.props.index);
        this.setState({isPopoverOpen: false});
    }

    render() {
        return (
            <div className="animalItemContainer">
            <div className="animalItemFirst" onClick={this.markerFocus}>
                <div className="roomIcon" style={{color: this.props.color}}><RoomIcon fontSize='large'/></div>
                <div className="animalName"><h1>{this.props.name}</h1></div>

            </div>
            <div>

                <Popover isOpen={this.state.isPopoverOpen} position={'right'} onClickOutside={() => this.setState({ isPopoverOpen: false })} content={({ position, targetRect, popoverRect }) => (
                    <ArrowContainer position={position}
                        targetRect={targetRect}
                        popoverRect={popoverRect}
                        arrowColor={'lightgray'}
                        arrowSize={15} >
                        <div className="moreVertPopover">
                            <button className="popoverButton">
                                Rename
                            </button>
                            <button className="popoverButton" onClick={this.deleteAnimal}>
                                Delete
                            </button>
                        </div>
                    </ArrowContainer>
                )}>
                <div className="moreVertIcon"><MoreVertIcon fontSize='large' onClick={() => this.setState({ isPopoverOpen: !this.isPopoverOpen })}/></div>
                </Popover>
            </div>
            </div>

        )
    }
}

export default AnimalItem