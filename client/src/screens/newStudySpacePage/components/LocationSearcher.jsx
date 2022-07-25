import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: -3.745,
  lng: -38.523,
};
const containerStyle = {
  width: "100%",
  height: "35vh",
};
const LocationSearcher = () => {
  console.log("LocationSearcher", process.env.REACT_APP_MAP_API_KEY);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <Box>
      <Typography variant="h6">Step 1: Location</Typography>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2rem  2rem ",
        }}
      >
        <TextField variant="outlined" label="City" />
        <TextField variant="outlined" label="Lat" />
        <TextField variant="outlined" label="Lon" />
      </Stack>
    </Box>
  ) : (
    <></>
  );
};

export default React.memo(LocationSearcher);
