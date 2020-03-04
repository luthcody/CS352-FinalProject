import React, {Component} from 'react';
import Header from './Header/Header';
import Map from './Map/Map';
import AnimalList from './AnimalList/AnimalList';
import animalData from './data.json'
import './Main.css'

var randomColor = require('randomcolor');

class Main extends Component {
    constructor() {
        super()
        this.state = {
            animals: animalData.map((data) => data)
        }
    }

    render() {
        var colors = randomColor({count: this.state.animals.length, luminosity: "bright"});
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="animalList">
                        <AnimalList animals={this.state.animals} colors={colors}/>
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