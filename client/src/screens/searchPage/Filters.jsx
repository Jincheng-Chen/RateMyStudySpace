import React, { useState } from "react";
import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function Filters() {
  const defaultValues = {
    filter: "none",
    operator: "none",
    value: "",
  };

  const [filter, setFilter] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <Card>
      <FormControl>
        <InputLabel id={"filter-label"}>Filter</InputLabel>
        <Select
          labelId={"filter-label"}
          id={"filter-options"}
          value={filter.filter}
          label={"Filter"}
          name={"filter"}
          onChange={handleInputChange}
        >
          <MenuItem value={"none"}>None</MenuItem>
          <MenuItem value={"overall"}>Overall</MenuItem>
          <MenuItem value={"noise"}>Noise</MenuItem>
          <MenuItem value={"space"}>Table Space</MenuItem>
          <MenuItem value={"time"}>Time Limit</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id={"operator-label"}>Operator</InputLabel>
        <Select
          labelId={"operator-label"}
          id={"operator-options"}
          value={filter.operator}
          label={"Operator"}
          name={"operator"}
          onChange={handleInputChange}
        >
          <MenuItem value={"none"}>None</MenuItem>
          <MenuItem value={"greater"}>></MenuItem>
          <MenuItem value={"less"}>{"<"}</MenuItem>
          <MenuItem value={"equal"}>=</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          id={"value-options"}
          value={filter.value}
          name={"value"}
          label={"Value"}
          onChange={handleInputChange}
          type={"number"}
        />
      </FormControl>
    </Card>
  );
}

export default Filters;
