import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ options, propClass }) {
  const navigate = useNavigate();
  return (
    <Autocomplete
      options={options}
      sx={{ width: "40vw", background: "white" }}
      renderInput={(params) => <TextField {...params} label="Enter City" />}
      className={propClass}
      onChange={() => navigate("/search")}
    ></Autocomplete>
  );
}

export default SearchBar;
