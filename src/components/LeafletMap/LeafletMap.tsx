// import React, { Component } from 'react';
// import styled from "styled-components";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// const StyledMap = styled(Map)`
//   position: relative;
//   min-width: 300px;
//   height: 10rem;
//   flex-shrink: 0;
//   border-radius: 8px;
//   overflow: hidden;
// `;

// type State = {
//   lat: number;
//   lng: number;
//   zoom: number;
// };

// class SimpleExample extends Component<{}, State> {
//   state = {
//     lat: 48.87159,
//     lng: 2.3062,
//     zoom: 12,
//   };

//   render() {
//     const position: [number, number] = [this.state.lat, this.state.lng];

//     // const notIteractive = {
//     //   zoomControl: false, 
//     //   touchZoom: false, 
//     //   scrollWheelZoom: false, 
//     //   keyboard: false,
//     //   dragging: false,
//     //   doubleClickZoom: false,
//     //   boxZoom: false
//     // }

//     return (
//       <StyledMap
//         center={position} 
//         zoom={this.state.zoom} 
//       >
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} />
//       </StyledMap>
//     );
//   }
// }

// export default SimpleExample;
export {};