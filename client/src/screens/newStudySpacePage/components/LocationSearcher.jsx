import {
  Box,
  Stack,
  Typography,
  TextField as MUITextField,
} from "@mui/material";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import SearchBar from "../../../shared/components/SearchBar";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { TextField, Autocomplete } from "mui-rff";
import { Field } from "react-final-form";

const useStyles = makeStyles({
  searchBarPos: {
    display: "flex",
    padding: ".5vw",
    borderRadius: ".25vw",
    margin: "auto",
  },
});

const containerStyle = {
  width: "100%",
  height: "35vh",
};

const LocationSearcher = () => {
  //Initial Values
  const cities = ["Vancouver", "San Fransisco", "Toronto"];
  const classes = useStyles();
  //States
  const [studydSpaceInfo, setStudySpaceInfo] = useState(null);
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 49.2606, lng: 123.246 });
  const [zoom, setZoom] = useState(13);
  //Load the Map API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  // Set up the makers and info windows when hover on a marker
  const SearchResultCallBack = (city, description, lat, lng) => {
    setStudySpaceInfo({ city: city, address: description, lat: lat, lng: lng });
    window.alert(
      JSON.stringify({ city: city, address: description, lat: lat, lng: lng })
    );
    console.log(studydSpaceInfo);
    setCenter({ lat: lat, lng: lng });
    setCitiesAuto([city]);
    setLatAuto([lat]);
    setLogAuto([lng]);
    setZoom(13);
  };

  // Conditoal render component
  const [citiesAuto, setCitiesAuto] = useState([]);
  const [latAuto, setLatAuto] = useState([]);
  const [logAuto, setLogAuto] = useState([]);

  return isLoaded ? (
    <Box>
      <Typography variant="h6">Step 1: Location</Typography>
      <SearchBar
        options={cities}
        propClass={classes.searchBarPos}
        callBack={SearchResultCallBack}
      ></SearchBar>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {studydSpaceInfo && (
          <Marker
            position={{ lat: studydSpaceInfo.lat, lng: studydSpaceInfo.lng }}
          />
        )}
      </GoogleMap>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2rem  2rem ",
        }}
      >
        <Autocomplete
          required={true}
          disablePortal
          id="combo-box-demo"
          name="city"
          options={citiesAuto}
          sx={{ width: 300 }}
          renderInput={(params) => <MUITextField {...params} label="City" />}
        />
        <Autocomplete
          required={true}
          disablePortal
          id="combo-box-demo"
          name="lat"
          options={latAuto}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <MUITextField {...params} label="Latitude" />
          )}
        />
        <Autocomplete
          required={true}
          disablePortal
          id="combo-box-demo"
          name="lon"
          options={logAuto}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <MUITextField {...params} label="Longitude" />
          )}
        />
      </Stack>
    </Box>
  ) : (
    <></>
  );
};

export default React.memo(LocationSearcher);
