import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Map as LeafletMap, Marker, Popup, TileLayer, ZoomControl, ScaleControl } from 'react-leaflet';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Leaflet from 'leaflet';
import RoomIcon from '@material-ui/icons/RoomRounded';
import ReplayIcon from '@material-ui/icons/Replay';

import './Map.css';

class Map extends Component {
    constructor() {
        super();
        this.state = {
            zoom: 18
        }
        this.getSearchAnimalFocus = this.getSearchAnimalFocus.bind(this);
    }

    getSearchAnimalFocus(id) {
        if (id !== -1) {
            var coords = this.props.animals[id].gpsCoord;
            this.props.markerFocus(coords);
        } else {
            this.props.resetMap();
        }
    }

    render() {
        var animals = this.props.animals;
        var colors = this.props.colors;
        var animalNames = this.props.loginStatus ? this.props.animals.map(animal => animal.name) : [];
        var pins = [];
        var coords = [];
        var bounds = [];

        var zoom = this.state.zoom;

        if(this.props.loginStatus){
            for(var i = 0; i < animals.length; i++){
                const iconPerson = Leaflet.divIcon({ className: "mapIcon", html: ReactDOMServer.renderToString(<RoomIcon fontSize='large' style={{color: colors[i], border: 10}}/>), iconAnchor: [18,3]})
                var popupContent = (
                    <div>
                        <b><h3>{animals[i].name}</h3></b>
                        <b>Nearest Address:</b><br/>
                        {animals[i].nearAddress}<br/><br/>
                        <b>Last GPS Coordiantes (Lat, Lon):</b><br/>  
                        ({animals[i].gpsCoord[0]}, {animals[i].gpsCoord[1]})<br/><br/>
                        <b>Time Last Updated:</b><br/>  
                        {animals[i].lastUpdate}
                    </div>
                )
                pins.push(<Marker position={animals[i].gpsCoord} icon={iconPerson}><Popup>{popupContent}</Popup></Marker>);
                coords.push(animals[i].gpsCoord);
            }
            bounds = Leaflet.latLngBounds(coords);
        }

        var center, showOne;

        if(this.props.animals.length > 0 && this.props.loginStatus){
            console.log('In here!');
            showOne = this.props.showOne || ((bounds.getSouthWest().lat === bounds.getNorthEast().lat) && (bounds.getSouthWest().lng === bounds.getNorthEast().lng)) || (this.props.animals && this.props.animals.length === 1)
            if (this.props.showOne) {
                center = this.props.mapFocusCoords;
            } else if ((bounds.getSouthWest().lat === bounds.getNorthEast().lat) && (bounds.getSouthWest().lng === bounds.getNorthEast().lng)){
                center = bounds.getCenter();
            } else if (this.props.animals && this.props.animals.length === 1) {
                center = this.props.animals[0].gpsCoord;
            }
        } else {
            console.log("Nope, in here actually!");
            center = [44.5629321, -123.2836109];
            showOne = true;
            zoom = 12;
        }

        var mapContent = (
            <div>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <ZoomControl position='topright' />
                <ScaleControl position='bottomleft' />
                {pins}
            </div>
        )

        var content;
        if(showOne) {
            content = (            
                <LeafletMap center={center} zoom={zoom} zoomControl={false} style={{zIndex: 0}}>
                    {mapContent}
                </LeafletMap>
            )
        } else {
            content = (            
                <LeafletMap zoomControl={false} bounds={bounds} style={{zIndex: 0}}>
                    {mapContent}
                </LeafletMap>
            )
        }

        return (
            <div className="mapHolder">
                <div className="searchForm">
                    <Autocomplete
                        onChange={(event, value) => this.getSearchAnimalFocus(animalNames.indexOf(value))}
                        options={animalNames}
                        renderInput={params => (
                            <TextField {...params} label="Search" variant="outlined" />
                        )}
                    />
                </div>
                <div className="replayIcon" onClick={this.props.resetMap}><ReplayIcon fontSize='small'/></div>
                {content}
            </div>
        );
    }
}

export default Map;