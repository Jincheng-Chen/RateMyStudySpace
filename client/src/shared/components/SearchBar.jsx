import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

function SearchBar({options, propClass}) {
  return (
    <Autocomplete
        options = {options}
        sx = {{width: "40vw", background: "white"}}
        renderInput={(params) => <TextField {...params} label="Enter City" />}
        className = {propClass}
    >
    </Autocomplete>
  )
}

export default SearchBar