import React, {Component} from 'react';
import Header from './Header/Header';
import Map from './Map/Map';
import AnimalList from './AnimalList/AnimalList';
import animalData from './data.json';
import './Main.css'
var randomColor = require('randomcolor');
var faker = require('faker');


class Main extends Component {
    constructor() {
        super();
        this.state = {
            animals: animalData.map((data) => data),
            loginStatus: true,
            userName: "group6",
            colors: randomColor({count: 4, luminosity: "dark"}),
            resetMap: false,
            mapFocusCoords: [44.5629321, -123.2836109],
            showOne: false
        }
        this.updateLogin = this.updateLogin.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
        this.resetMapPosition = this.resetMapPosition.bind(this);
        this.deleteAnimal = this.deleteAnimal.bind(this);
    }

    updateLogin(status, username) {
        this.setState({loginStatus: status, userName: username});
    }

    addAnimal(name) {
        var newAnimal = {
            "name": name,
            "nearAddress": faker.address.streetAddress() + ", Corvallis OR, 97330",
            "gpsCoord": [(Math.random() * (44.573481 - 44.556213) + 44.556213), (Math.random() * (-123.258426 - -123.299700) + -123.299700)],
            "lastUpdate": faker.date.recent().toString()
        }

        var updatedAnimals = this.state.animals;
        updatedAnimals.push(newAnimal);

        var updatedColors = this.state.colors;
        updatedColors.push(randomColor({luminosity: "bright"}));

        this.setState({animals: updatedAnimals, colors: updatedColors});

        return newAnimal;
    }

    deleteAnimal(index) {
        // Implement Later

        // var tempArray = [];
        // for(var i = 0; i < tempArray.length; i++){
        //     if(i !== index){
        //         tempArray.push(this.state.animals[i]);
        //     }
        // }
        // this.setState({animals: tempArray});
    }

    resetMapPosition() {
        this.setState({resetMap: !this.state.resetMap, showOne: false});
    }

    render() {
        return (
            <div>
                <Header updateLogin={(status, username) => this.updateLogin(status, username)} getLoginStatus={this.state.loginStatus} getUserName={this.state.userName}/>
                <div className="content">
                    <div className="animalList">
                        <AnimalList animals={this.state.animals} colors={this.state.colors} loginStatus={this.state.loginStatus} addAnimal={(name) => this.addAnimal(name)} resetMap={this.resetMapPosition} markerFocus={(coords) => this.setState({mapFocusCoords: coords, showOne: true})} delete={(index) => this.deleteAnimal(index)}/>
                    </div>
                    <div className="map">
                        <Map mapFocusCoords={this.state.mapFocusCoords} mapZoopLevel={this.state.mapZoopLevel} animals={this.state.animals} colors={this.state.colors} loginStatus={this.state.loginStatus} showOne={this.state.showOne}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main