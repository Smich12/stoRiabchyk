import React, { Component, useRef } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import './MyMap.scss'

const INIT_COORDS = {
  lat: 49.22264526508317,
  lng: 28.43144611324463
}

const MARKER_POSITION = {lat: 49.222935, lng: 28.431808}

const GOOGLE_MAPS_API = process.env.GOOGLE_API_KEY;
const MapContainer = (props) => {
  const mapRef = useRef();
  console.log('props:', props);
  if (!props.google) {
    return <div>Loading...</div>;
  }

  const openNavigation = () => {
    // If it's an iPhone..
    if( (navigator.platform.indexOf("iPhone") != -1)
      || (navigator.platform.indexOf("iPod") != -1)
      || (navigator.platform.indexOf("iPad") != -1))
      window.open(`maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${MARKER_POSITION.lat},${MARKER_POSITION.lng}`);
    else
      window.open(`https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${MARKER_POSITION.lat},${MARKER_POSITION.lng}`);
  }
  const handleMarketClick = () => {
    console.log('CLICK!!!')
    openNavigation()
  }
  return (
    <div>
      <h2>Наші координати</h2>
      <div
        className='container'
      >

        <Map
          ref={mapRef}
          style={{}}
          google={props.google}
          zoom={15}
             initialCenter={INIT_COORDS}
             onDragend={(e) => {
             console.log(mapRef.current.map.getCenter().lat())
             console.log(mapRef.current.map.getCenter().lng())
             }}
        >
          <Marker
            name={'Dolores park'}
            position={MARKER_POSITION}
            onClick={handleMarketClick}
          />
          {/*<InfoWindow*/}
          {/*  marker={this.state.activeMarker}*/}
          {/*  visible={this.state.showingInfoWindow}*/}
          {/*>*/}
          {/*  <div>*/}
          {/*    <h1>{this.state.selectedPlace.name}</h1>*/}
          {/*  </div>*/}
          {/*</InfoWindow>*/}
        </Map>
      </div>
    </div>
    );
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API,
  v: "3.30"
})(MapContainer);
