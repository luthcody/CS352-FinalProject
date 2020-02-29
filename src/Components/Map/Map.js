import React, { Component } from 'react'
import { Map as LeafletMap, Marker, Popup, TileLayer, ZoomControl, ScaleControl } from 'react-leaflet'
import './Map.css';

class Map extends Component {
    constructor() {
        super()
        this.state = {
            lat: 12.5,
            lng: 19.3,
            zoom: 5
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div className="mapHolder">
                <LeafletMap center={position} zoom={this.state.zoom} zoomControl={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <ZoomControl position='topright' />
                    <ScaleControl position='bottomleft' />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </LeafletMap>
            </div>
        );
    }
}

export default Map;