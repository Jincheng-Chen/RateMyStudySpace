import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useGetStudySpaceFilteredQuery } from "../../features/api/apiSlice";

const useStyles = makeStyles({
  container: {
    padding: "10px",
    position: "relative",
    top: "3vh",
    left: "3vh",
    zIndex: "1",
    backgroundColor: "white",
    borderRadius: "9px",
  },
});

function Filters({ stateChanger, location }) {
  const classes = useStyles();

  const lat = location.lat;
  const lon = location.lon;
  const radius = location.radius;
  const defaultValues = {
    location: location,
    filter: "none",
    operator: "none",
    value: "0",
    lat: lat,
    lon: lon,
    radius: radius,
  };

  const [filter, setFilter] = useState(defaultValues);
  const [filterQuery, setFilterQuery] = useState(defaultValues);
  const { data, isLoading, isError } =
    useGetStudySpaceFilteredQuery(filterQuery);
  if (!isLoading) {
    stateChanger(data);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterQuery(filter);
  };

  return (
    <Box className={classes.container}>
      <Grid
        container
        spacing={3}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Grid item xs={3}>
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
              <MenuItem value={"tableSpace"}>Table Space</MenuItem>
              <MenuItem value={"timeLimit"}>Time Limit</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
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
              <MenuItem value={"gt"}>{">"}</MenuItem>
              <MenuItem value={"lt"}>{"<"}</MenuItem>
              <MenuItem value={"eq"}>=</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
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
        </Grid>
        <Grid item xs={3}>
          <Button
            type={"submit"}
            id={"apply-filter"}
            variant={"contained"}
            size={"large"}
            onClick={handleSubmit}
          >
            Apply
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Filters;
