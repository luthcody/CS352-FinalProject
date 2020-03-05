import React, {Component} from 'react';
import Header from './Header/Header';
import Map from './Map/Map';
import AnimalList from './AnimalList/AnimalList';
import animalData from './data.json'
import './Main.css'

var randomColor = require('randomcolor');

class Main extends Component {
    constructor() {
        super();
        this.state = {
            animals: animalData.map((data) => data),
            loginStatus: false,
            userName: "",
            colors: randomColor({count: 4, luminosity: "bright"})
        }
        this.updateLogin = this.updateLogin.bind(this);
    }

    updateLogin(status, username) {
        this.setState({loginStatus: status, userName: username});
    }

    render() {
        return (
            <div>
                <Header updateLogin={(status, username) => this.updateLogin(status, username)} getLoginStatus={this.state.loginStatus} getUserName={this.state.userName}/>
                <div className="content">
                    <div className="animalList">
                        <AnimalList animals={this.state.animals} colors={this.state.colors}/>
                    </div>
                    <div className="border"></div>
                    <div className="map">
                        <Map />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main