import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import SearchBar from "../../../shared/components/SearchBar";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { TextField } from "mui-rff";
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
  const [city, setCity] = useState(null);
  const [lat, setLat] = useState(null);
  const [log, setLog] = useState(null);
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
    setCity(city);
    setLat(lat);
    setLog(lng);
    setZoom(13);
  };

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
        <TextField
          variant="filled"
          name="city"
          label="City"
          required={true}
          value={city}
        />
        <TextField
          variant="filled"
          name="lat"
          label="Lat"
          required={true}
          value={lat}
        />
        <TextField
          variant="filled"
          name="lon"
          label="Lon"
          required={true}
          value={log}
        />
      </Stack>
    </Box>
  ) : (
    <></>
  );
};

export default React.memo(LocationSearcher);
