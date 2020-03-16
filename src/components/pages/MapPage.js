import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import locationsJson from '../utils/location.json';

const mapStyles = { height: '50vh', width: '50%' }

class MapPage extends Component {

  state = {
    showInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  renderMarkers = () => {
    return locationsJson.map((locations, index) => {
      return <Marker key={index} id={index} position={{
        lat: locations.lat,
        lng: locations.lon
      }}
        name={`Latitude: ${locations.lat}, Longtitude: ${locations.lon}`}
        onClick={this.onMarkerClick}
      />
    })
  }

  render() {

    return (
      <div>
        <h2>Map</h2>
        <p>Below is a map with location markers and its geolocation information provided from “location.json” file.<br />
          Click on each marker for its geolocation information.
        </p>
        <br />
        <div style={{ height: '50vh', width: '50%' }}>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat: -28.017591, lng: 153.432395 }}
          >
            {this.renderMarkers()}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
        <br />
        <p>Created using Google Maps API.</p>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "INSERT API KEY HERE"
})(MapPage);