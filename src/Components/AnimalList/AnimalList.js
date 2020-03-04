import React, {Component} from 'react';
import AnimalItem from './AnimalItem';
import ReplayIcon from '@material-ui/icons/Replay';
import AddIcon from '@material-ui/icons/Add';
import CustomModal from '../Modal/Modal';
import './AnimalList.css';

class AnimalList extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        }
    }

    render() {
        var animals = this.props.animals;
        var colors = this.props.colors;
        var elements = [];
        for (var i = 0; i < animals.length; i++){
            elements.push(<AnimalItem name={animals[i].name.substring(0,10)} nearAddress={animals[i].nearAddress} gpsCoord={animals[i].gpsCoord} lastUpdate={animals[i].lastUpdate} color={colors[i]}/>);
        }

        return (
            <div>
                <div className="animalHeader">
                    <div className="myAnimals"><h1>My Animals</h1></div>
                    <div className="replayIcon"><ReplayIcon fontSize='large'/></div>
                    <div className="addIcon" onClick={() => this.setState({ modalOpen: true })}><AddIcon fontSize='large'/></div>

                    <CustomModal open={this.state.modalOpen} onClose={() => this.setState({ modalOpen: false})} title="Registration" content="Content"/>
                </div>
                <div className="scrollList">
                    {elements}
                </div>
            </div>
        )
    }
}

export default AnimalList