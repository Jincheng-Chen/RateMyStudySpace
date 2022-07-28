import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
const center = {
  lat: -3.745,
  lng: -38.523,
};
const containerStyle = {
  width: "100%",
  height: "50vh",
};

const MapComponent = ({ markers }) => {
  const navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <Box>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markers ? markers[0] : center}
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
