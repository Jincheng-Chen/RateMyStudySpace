import React, { useState } from "react";
import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: "3vw",
  },
});

function Filters() {
  const classes = useStyles();

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
    <Card className={classes.container}>
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
              <MenuItem value={"quietness"}>Noise</MenuItem>
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
              <MenuItem value={"gt"}>></MenuItem>
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
          <Button id={"apply-filter"} variant={"contained"} size={"large"}>
            Apply Filter
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Filters;
