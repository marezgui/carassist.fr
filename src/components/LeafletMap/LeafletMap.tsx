import React, { Component } from 'react';
import styled from "styled-components";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const StyledMap = styled(Map)`
  position: relative;
  min-width: 300px;
  height: 10rem;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
`;

type State = {
  lat: number;
  lng: number;
  zoom: number;
};

class SimpleExample extends Component<{}, State> {
  state = {
    lat: 48.87,
    lng: 2.304,
    zoom: 13,
  };

  render() {
    const position: [number, number] = [this.state.lat, this.state.lng];

    return (
      <StyledMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMap>
    );
  }
}

export default SimpleExample;
