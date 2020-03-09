import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import HelpIcon from '@material-ui/icons/Help';
import Popover, {ArrowContainer} from 'react-tiny-popover';
import './AnimalRegistration.css';

class animalRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collarID: "",
            collarIDError: false,
            collarIDHelpText: "",
            nickname: "",
            nicknameError: false,
            nicknameHelpText: "",
            isPopover1Open: false,
            isPopover2Open: false
        }

        this.AddAnimal = this.AddAnimal.bind(this);
        this.HandleCollarIDFieldChange = this.HandleCollarIDFieldChange.bind(this);
        this.HandleNicknameFieldChange = this.HandleNicknameFieldChange.bind(this);
        this.ClearFields = this.ClearFields.bind(this);
    }

    HandleCollarIDFieldChange(e) {
        this.setState({
            collarID: e.target.value
        })
    }

    HandleNicknameFieldChange(e) {
        this.setState({
            nickname: e.target.value
        })
    }

    AddAnimal() {
        if (this.state.collarID.length === 0) {
            this.setState({collarIDError: true, collarIDHelpText: "Collar ID cannot be empty"});
            return;
        } else {
            this.setState({collarIDError: false, collarIDHelpText: ""});
        }

        if (this.state.nickname.length === 0) {
            this.setState({nicknameError: true, nicknameHelpText: "Pet's Name cannot be empty"});
            return;
        } else {
            this.setState({nicknameError: false, nicknameHelpText: ""});
        }

        this.props.addAnimal(this.state.nickname);
    }

    ClearFields() {
        this.setState({collarID: ""});
        this.setState({nickname: ""});
    }

    render() {
        return (
            <div>
                <div className="animalRegistration">
                    <div className="inputField">
                        <h2 className="text">Collar ID:</h2>
                        <TextField id="input" inputProps={{maxLength: 10}} error={this.state.collarIDError} helperText={this.state.collarIDHelpText} value={this.state.collarID} onChange={this.HandleCollarIDFieldChange} variant="outlined" />
                        <Popover isOpen={this.state.isPopover1Open} position={'right'} onClickOutside={() => this.setState({ isPopover1Open: false })} content={({ position, targetRect, popoverRect }) => (
                            <ArrowContainer style={{zIndex: 1}} position={position}
                                targetRect={targetRect}
                                popoverRect={popoverRect}
                                arrowColor={'lightgrey'}
                                arrowSize={10} >
                                <div className="registrationPopover">
                                    The unique ID that can be found in the battery compartment of the collar.
                                </div>
                            </ArrowContainer>
                        )}>
                            <HelpIcon className="helpIcon" onClick={() => this.setState({ isPopover1Open: !this.isPopover1Open })}/>
                        </Popover>
                    </div>
                    <div className="inputField">
                        <h2 className="text">Pet's Name:</h2>
                        <TextField id="input" inputProps={{maxLength: 10}} error={this.state.nicknameError} helperText={this.state.nicknameHelpText} value={this.state.nickname} onChange={this.HandleNicknameFieldChange} variant="outlined" />
                        <Popover isOpen={this.state.isPopover2Open} position={'right'} onClickOutside={() => this.setState({ isPopover2Open: false })} content={({ position, targetRect, popoverRect }) => (
                            <ArrowContainer position={position}
                                targetRect={targetRect}
                                popoverRect={popoverRect}
                                arrowColor={'lightgrey'}
                                arrowSize={10} >
                                <div className="registrationPopover">
                                    The label you would like to use for your pet.
                                </div>
                            </ArrowContainer>
                        )}>
                            <HelpIcon className="helpIcon" onClick={() => this.setState({ isPopover2Open: !this.isPopover2Open })}/>
                        </Popover>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={this.AddAnimal}>Add Collar</button>
                    <button onClick={this.ClearFields}>Clear Fields</button>
                </div>
            </div>
        )
    }
}

export default animalRegistration;