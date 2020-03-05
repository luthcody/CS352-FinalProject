import React, {Component} from 'react';
import './AnimalList.css';

class AnimalLoggedOut extends Component {
    render() {
        return (
            <div className="animalLoggedOutContainer">
                <p>Login to view & add animals</p>
            </div>
        )
    }
}

export default AnimalLoggedOut