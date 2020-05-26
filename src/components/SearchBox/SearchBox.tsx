import React, { useState, useEffect } from 'react';
import { LoadScript, Autocomplete, DistanceMatrixService } from "@react-google-maps/api";
import { TextField, Button } from "@material-ui/core";
import { googleMapsApiKey } from '../../api/credentials';
import MyModal from '../Modal/Modal';

const libraries = ['places'];

const AutoCompleteOptions = {
  componentRestrictions: { country: "fr" },
};

let originAutocomplete: any = null;
let destinationAutocomplete: any = null;

let mockDistance = {
  destination_addresses: ["Strasbourg, France"],
  origin_addresses: ["Paris, France"],
  rows: [
    {
      elements: [
        {
          distance: {
            text: "491 km",
            value: 491327,
          },
          duration: {
            text: "4 heures 39 minutes",
            value: 16749,
          },
          status: "OK",
        },
      ],
    },
  ],
  status: "OK",
};

const SearchBox = ({ position }: any) => {
    const [originInput, setOriginInput] = useState('');
    const [destinationInput, setDestinationInput] = useState('');
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    const [ready, setReady] = useState(false);
    const [price, setPrice] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [distance, setDistance] = useState({ value: 0 });

    useEffect(() => {
        if (originPlace && destinationPlace) {
            setReady(true);
        }
    }, [originPlace, destinationPlace]);
    
    const onOriginLoad = (autocomplete: any) => {
      originAutocomplete = autocomplete;
    };

    const onOriginPlaceChanged = () => {
      if (originAutocomplete !== null) {
        let place = originAutocomplete?.getPlace();
        setOriginPlace(place.formatted_address);
      } else {
        console.log("Autocomplete is not loaded yet!");
      }
    };

    const onDestinationLoad = (autocomplete: any) => {
        destinationAutocomplete = autocomplete;
    };

    const onDestinationPlaceChanged = () => {
       if (destinationAutocomplete !== null) {
         let place = destinationAutocomplete?.getPlace();
         setDestinationPlace(place.formatted_address);
       } else {
         console.log("Autocomplete is not loaded yet!");
       }
     };

    const getDistance = (response: any, status: any) => {
        setReady(false);
        console.log('=>',response, '=>', status);

        if (status === "OK") // 'NOT_FOUND'
            setDistance(response.rows[0].elements[0].distance);
    };

    const handleSubmit = () => {
        setModalShow(true);
    };
    
    return (
      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
        <Autocomplete
          options={AutoCompleteOptions}
          onPlaceChanged={onOriginPlaceChanged}
          onLoad={onOriginLoad}
        >
          <TextField
            id="1"
            label="Départ"
            variant="outlined"
            style={{ width: "100%" }}
            onChange={(e) => setOriginInput(e.target.value)}
          />
        </Autocomplete>

        <Autocomplete
          options={AutoCompleteOptions}
          onPlaceChanged={onDestinationPlaceChanged}
          onLoad={onDestinationLoad}
        >
          <TextField
            id="2"
            label="Arrivé"
            variant="outlined"
            style={{ width: "100%", marginTop: "24px" }}
            onChange={(e) => setDestinationInput(e.target.value)}
          />
        </Autocomplete>

        <Button
          style={{ marginTop: "24px" }}
          variant="contained"
          color="primary"
          fullWidth
          disabled={!(ready && !!originInput && !!destinationInput)}
          onClick={handleSubmit}
        >
          Calculer le prix
        </Button>

        <MyModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            setReady(true);
          }}
          price={ distance.value ? Math.floor((distance.value / 1000) * 2) : 'Erreur lors du calcul.'}
        />

        {ready && modalShow && (
          <DistanceMatrixService
            options={{
              origins: [originPlace],
              destinations: [destinationPlace],
              travelMode: "DRIVING",
            }}
            callback={getDistance}
          />
        )}
      </LoadScript>
    );
};

SearchBox.defaultProps = {
  position: {
    lat: 48.87159,
    lng: 2.3062,
  },
};

export default SearchBox;
