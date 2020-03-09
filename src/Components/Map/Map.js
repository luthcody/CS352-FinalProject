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
            zoom: 18
        }
    }

    render() {
        var animals = this.props.animals;
        var colors = this.props.colors;
        var pins = [];
        var coords = [];
        var bounds;

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

        var mapContent = (
            <div>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <ZoomControl position='topright' />
                <ScaleControl position='bottomleft' />
                {pins}
            </div>
        )

        var content;
        if(this.props.showOne) {
            content = (            
                <LeafletMap center={this.props.mapFocusCoords} zoom={this.state.zoom} zoomControl={false} style={{zIndex: 0}}>
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
                {content}
            </div>
        );
    }
}

export default Map;