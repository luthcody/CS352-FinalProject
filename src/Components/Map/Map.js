import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Map as LeafletMap, Marker, Popup, TileLayer, ZoomControl, ScaleControl } from 'react-leaflet';
import Leaflet from 'leaflet';
import RoomIcon from '@material-ui/icons/RoomRounded';
import './Map.css';

class Map extends Component {
    constructor() {
        super();
        this.state = {
            centerLat: 44.5629321,
            centerLng: -123.2836109,
            zoom: 16
        }
    }

    render() {
        var position = [this.state.centerLat, this.state.centerLng];
        var animals = this.props.animals;
        var colors = this.props.colors;
        var pins = [];
        var coords = [];
        var bounds;

        if(this.props.loginStatus){
            for(var i = 0; i < animals.length; i++){
                const iconPerson = Leaflet.divIcon({ className: "mapIcon", html: ReactDOMServer.renderToString(<RoomIcon fontSize='large' style={{color: colors[i], border: 10}}/>), iconAnchor: [18,3]})
                pins.push(<Marker position={animals[i].gpsCoord} icon={iconPerson}><Popup>Put stuff here... <br/> And also here.</Popup></Marker>);
                coords.push(animals[i].gpsCoord);
            }
            bounds = Leaflet.latLngBounds(coords);
        }


        return (
            <div className="mapHolder">
                <LeafletMap center={position} zoom={this.state.zoom} zoomControl={false} bounds={bounds}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <ZoomControl position='topright' />
                    <ScaleControl position='bottomleft' />
                    {pins}
                </LeafletMap>
            </div>
        );
    }
}

export default Map;