import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
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
            nicknameHelpText: ""
        }

        this.AddAnimal = this.AddAnimal.bind(this);
        this.HandleCollarIDFieldChange = this.HandleCollarIDFieldChange.bind(this);
        this.HandleNicknameFieldChange = this.HandleNicknameFieldChange.bind(this);

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

    render() {
        return (
            <div>
                <div className="animalRegistration">
                    <div className="inputField">
                        <h2 className="text">Collar ID:</h2>
                        <TextField id="input" inputProps={{maxLength: 10}} error={this.state.collarIDError} helperText={this.state.collarIDHelpText} onChange={this.HandleCollarIDFieldChange} variant="outlined" />
                    </div>
                    <div className="inputField">
                        <h2 className="text">Pet's Name:</h2>
                        <TextField id="input" inputProps={{maxLength: 10}} error={this.state.nicknameError} helperText={this.state.nicknameHelpText} onChange={this.HandleNicknameFieldChange} variant="outlined" />
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