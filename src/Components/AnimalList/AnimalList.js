import React, {Component} from 'react';
import AnimalItem from './AnimalItem';
import AnimalLoggedOut from './AnimalLoggedOut';
import ReplayIcon from '@material-ui/icons/Replay';
import AddIcon from '@material-ui/icons/Add';
import CustomModal from '../CustomModal/CustomModal';
import AnimalRegistration from './AnimalRegistration';
import './AnimalList.css';

class AnimalList extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
        this.deleteAnimal = this.deleteAnimal.bind(this);
    }

    openModal() {
        if(this.props.loginStatus){
            this.setState({ modalOpen: true });  
        }
    }

    addAnimal(name) {
        this.props.addAnimal(name);
        this.setState({modalOpen: false});
    }

    deleteAnimal(index) {
        this.props.delete(index);
    }

    render() {
        var animals = this.props.animals;
        var colors = this.props.colors;
        var elements;

        if(this.props.loginStatus) {
            elements = [];
            for (var i = 0; i < animals.length; i++){
                elements.push(<AnimalItem name={animals[i].name.substring(0,10)} nearAddress={animals[i].nearAddress} gpsCoord={animals[i].gpsCoord} lastUpdate={animals[i].lastUpdate} color={colors[i]} markerFocus={(coords) => this.props.markerFocus(coords)} delete={() => this.deleteAnimal(i)}/>);
            }
        } else {
            elements = (<AnimalLoggedOut />)
        }

        var registration = (<AnimalRegistration addAnimal={(name) => this.addAnimal(name)} />);

        return (
            <div>
                <div className="animalHeader">
                    <div className="myAnimals"><h1>My Animals</h1></div>
                    {/* <div className={'replayIcon ' + this.props.loginStatus} onClick={this.props.resetMap}><ReplayIcon fontSize='large'/></div> */}
                    <div className={'addIcon ' + this.props.loginStatus} onClick={this.openModal}>
                        <div className="addAPet">Add a Pet</div>
                        <div className="addIcon"><AddIcon fontSize='large'/></div>
                    </div>

                    <CustomModal open={this.state.modalOpen} onClose={() => this.setState({ modalOpen: false})} title="Registration" content={registration}/>
                </div>
                <div className="scrollList">
                    {elements}
                </div>
            </div>
        )
    }
}

export default AnimalList