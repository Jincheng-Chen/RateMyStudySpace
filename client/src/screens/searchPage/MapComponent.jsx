import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import Filters from "./Filters";
const center = {
  lat: -3.745,
  lng: -38.523,
};
const containerStyle = {
  position: "relative",
  width: "100%",
  height: "47vh",
};

const MapComponent = ({ markers, lat, lon }) => {
  const navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: lat, lng: lon }}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {markers &&
          markers.map((marker, index) => {
            return (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                title={marker.text}
                onClick={() =>
                  navigate("/studySpace", { state: marker.studySpace })
                }
              ></Marker>
            );
          })}
        <></>
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
};

export default React.memo(MapComponent);
