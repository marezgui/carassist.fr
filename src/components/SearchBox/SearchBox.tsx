import React, { useState, useEffect } from 'react';
import { LoadScript, Autocomplete, DistanceMatrixService } from "@react-google-maps/api";
import { TextField, Button, Paper } from "@material-ui/core";
import { googleMapsApiKey } from '../../api/credentials';
import ScrollDialog from "../Modal/Modal";
import { getPrice, isNotEmptyObj } from '../../libft';
import { Alert } from 'react-bootstrap';
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";

const mentions = 'Le tarif de votre remorquage professionel dépend de la distance à effectuer entre le point de départ et celui de destination.';

const priceDetails = '(Prise en charge 50€ + coefficient kilometrique: Citadine = 1,4€, Berline: 1,6€, 4x4: 2€)';

const libraries = ['places'];

const AutoCompleteOptions = {
  componentRestrictions: { country: ["fr", "be", "it", "ch", "nl", 'de'] },
};

let originAutocomplete: any = null;
let destinationAutocomplete: any = null;

type vehiculeType=  'BASIC' | 'SEDAN' | 'SUV'

const SearchBox = ({ position }: any) => {
    const [originInput, setOriginInput] = useState('');
    const [destinationInput, setDestinationInput] = useState('');
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    const [ready, setReady] = useState(false);
    const [price, setPrice] = useState<number>(0);
    const [modalShow, setModalShow] = useState(false);
    const [distance, setDistance] = useState<{} | any>({});
    const [type, setType] = useState<vehiculeType>("BASIC");

    useEffect(() => {
        if (originPlace && destinationPlace) {
            setReady(true);
        }
    }, [originPlace, destinationPlace]);

    useEffect(() => {
      if (isNotEmptyObj(distance)) {
        if (distance.hasOwnProperty("value")) {
          let price = getPrice(distance.value, type);
          setPrice(price);
        }
      }
    }, [distance, type]);
    
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
        {
          setDistance(response.rows[0].elements[0].distance);
        }
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

        <FormControl style={{ minWidth: "150px", marginTop: "24px" }}>
          <InputLabel htmlFor="uncontrolled-native">Véhicule</InputLabel>
          <NativeSelect
            defaultValue={"BASIC"}
            onChange={(e) => {
              setType(e.target.value as vehiculeType);
            }}
            inputProps={{
              name: "Type",
              id: "uncontrolled-native",
            }}
          >
            <option value={"BASIC"}>Citadine</option>
            <option value={"SEDAN"}>Berline</option>
            <option value={"SUV"}>Monospace / 4x4</option>
          </NativeSelect>
          <FormHelperText> Type de Véhicule </FormHelperText>
        </FormControl>

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

        <ScrollDialog
          open={modalShow}
          onClose={() => {
            setModalShow(false);
            setReady(true);
          }}
        >
          <Alert variant="info">
            <p> Départ: </p>
            <p> {originPlace} </p>
            <p> Destination: </p>
            <p> {destinationPlace} </p>
            <p> Type de véhicule: {type === 'SEDAN' ? 'Berline' : type === 'SUV' ? 'Monospace / 4x4' : 'Citadine'} </p>
          </Alert>
          <Alert
            variant="primary"
            style={{ width: "fit-content", margin: "auto" }}
          >
            {`${price} €`}
          </Alert>
          <Alert variant="light">
            <p style={{ fontSize: "12px" }}>{mentions}</p>
            <p style={{ fontSize: "10px" }}>{priceDetails}</p>
          </Alert>
        </ScrollDialog>

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
