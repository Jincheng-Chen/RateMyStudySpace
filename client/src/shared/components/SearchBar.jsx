import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isGetAccessor } from "typescript";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const PlacesAutocomplete = ({ callBack }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const navigate = useNavigate;
  const [val, setVal] = useState("");

  const handleInput = (e) => {
    // Update the keyword of the input element
    if (e) {
      setValue(e.target.value);
    }
  };

  const handleSelect = (e) => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    let description = e.target.textContent;
    setValue(description, false);
    clearSuggestions();
    console.log("here");
    // Get latitude and longitude via utility functions
    console.log(description);
    getGeocode({ address: description })
      .then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        callBack("Vancouver", description, lat, lng);
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Autocomplete
      options={data}
      sx={{ width: "40vw", background: "white" }}
      renderInput={(params) => <TextField {...params} label="Enter City" />}
      onInputChange={handleInput}
      onChange={handleSelect}
      value={val}
      getOptionLabel={(option) => {
        return option.description || "";
      }}
    ></Autocomplete>
  );
};

export default PlacesAutocomplete;
