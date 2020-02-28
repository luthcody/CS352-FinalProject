import React, {Component} from 'react';
import Header from './Header/Header';
import Map from './Map/Map';
import AnimalList from './AnimalList/AnimalList'
import './Main.css'

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="animalList">
                        <AnimalList />
                    </div>
                    <div className="map">
                        <Map />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main