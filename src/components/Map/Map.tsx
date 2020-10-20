import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MapStyles from './MapTheme/Uber';
import { googleMapsApiKey } from "../../api/credentials";

const options = {
  styles: MapStyles,
  DisableDefaultUI: true,
  draggable: true,
  fullscreenControl: true,
  keyboardShortcuts: false,
  streetViewControl: false,
  clickableIcons: false,
  panControl: false,
  mapTypeControl: false,
};

const Maps = ({ position }: any) => {

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        options={options}
        mapContainerStyle={{ width: "100%", height: "100%" }}
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
    lat: 49.25722,
    lng: 2.43662
  },
};

export default React.memo(Maps);
