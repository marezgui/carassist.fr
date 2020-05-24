import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MapStyles from './MapTheme/Uber';

const options = {
  styles: MapStyles,
  DisableDefaultUI: true,
  draggable: true,
  fullscreenControl: true,
  keyboardShortcuts: false,
  streetViewControl: false
};

const Maps = ({ position }: any) => {

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap
        options={options}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={position}
        zoom={12}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

Maps.defaultProps = {
  position: {
    lat: 48.87159,
    lng: 2.3062
  },
};

export default React.memo(Maps);
