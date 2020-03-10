import React, {Component} from 'react';
import AnimalItem from './AnimalItem';
import AnimalLoggedOut from './AnimalLoggedOut';
import AddIcon from '@material-ui/icons/Add';
import CustomModal from '../CustomModal/CustomModal';
import AnimalRegistration from './AnimalRegistration';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './AnimalList.css';

class AnimalList extends Component {
    constructor() {
        super();
        this.state = {
            registrationModalOpen: false,
            successModalOpen: false,
            failModalOpen: false
        }
        this.openRegistrationModal = this.openRegistrationModal.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
        this.verifyAnimal = this.verifyAnimal.bind(this);
        this.deleteAnimal = this.deleteAnimal.bind(this);
    }

    openRegistrationModal() {
        if(this.props.loginStatus){
            this.setState({ registrationModalOpen: true });  
        }
    }

    addAnimal(name) {
        this.props.addAnimal(name);
        this.setState({registrationModalOpen: false});
        this.setState({successModalOpen: true});
    }

    verifyAnimal(name) {
        if(name === "Test") {
            this.setState({registrationModalOpen: false});
            this.setState({failModalOpen: true})
        } else {
            this.addAnimal(name);
        }
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

        var registration = (<AnimalRegistration addAnimal={(name) => this.verifyAnimal(name)} />);
        var registrationSuccess = (
            <div>
                <div className="iconSuccess"><CheckCircleOutlineIcon style={{ fontSize: 150 }}/></div>
                <h3>Your collar has been registered.</h3>
                <button onClick={() => this.setState({successModalOpen: false})}>Close</button>
            </div>
        );
        var registrationFailure = (
            <div>
                <div className="iconFail"><HighlightOffIcon style={{ fontSize: 150 }}/></div>
                <h3>Registration Failed!</h3>
                <h3>The collar ID could not be found.</h3>
                <button onClick={() => this.setState({failModalOpen: false, registrationModalOpen: true})}>Try Again</button>
            </div>
        );

        return (
            <div>
                <div className="animalHeader">
                    <div className="myAnimals"><h1>My Animals</h1></div>
                    <div className={'addIcon ' + this.props.loginStatus} onClick={this.openRegistrationModal}>
                        <div className="addAPet">Add a Pet</div>
                        <div className="addIcon"><AddIcon fontSize='large'/></div>
                    </div>

                    <CustomModal open={this.state.registrationModalOpen} onClose={() => this.setState({ registrationModalOpen: false})} title="Registration" content={registration}/>
                    <CustomModal open={this.state.successModalOpen} onClose={() => this.setState({ successModalOpen: false})} title="Registration" content={registrationSuccess}/>
                    <CustomModal open={this.state.failModalOpen} onClose={() => this.setState({ failModalOpen: false})} title="Registration" content={registrationFailure}/>

                </div>
                <div className="scrollList">
                    {elements}
                </div>
            </div>
        )
    }
}

export default AnimalList