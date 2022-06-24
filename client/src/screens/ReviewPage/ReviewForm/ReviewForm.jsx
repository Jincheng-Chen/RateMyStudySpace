import { Grid, TextField, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Radios } from "mui-rff";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@date-io/date-fns";

import { DatePicker } from "mui-rff";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import { Switches, SwitchData } from "mui-rff";

import { Checkboxes } from "mui-rff";

// const initalState = {
//   reviewId: 0,
//   starRatings: {
//     wifi: 0,
//     timeLimit: 0,
//     food: 0,
//     service: 0,
//   },
//   questionnire: {
//     timeStayed: 0,
//     taskType: 0,
//     frequency: 0,
//   },
//   comments: "",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const showResults = async (values) => {
  await sleep(500); // server latency
  window.alert(JSON.stringify(values, undefined, 2));
};

const ReviewForm = () => {
  return (
    <>
      <h1>REACT Final form</h1>
      <Form onSubmit={showResults}>
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <label>First Name</label>
            <Field name="firstName" component="input" />
            <br></br>
            <label>Last Name</label>
            <Field name="lastName" component="input" />
            <br />
            <label>MUI Textfield</label>
            <Field name="mui-field">
              {(props) => (
                <div>
                  <TextField
                    variant="outlined"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </div>
              )}
            </Field>
            <Radios
              label="Pick one..."
              name="Time limit"
              required={true}
              data={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
            <Field name="wifi" type="radio">
              {(props) => (
                <div>
                  <Rating
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    precision={0.5}
                    size="large"
                  />
                </div>
              )}
            </Field>
            <Switches
              label="Enable feature X"
              name="feature-x"
              required={true}
              data={{ label: "Feature X", value: true }}
            />
            <br />

            <LocalizationProvider>
              <DatePicker
                label="Test"
                name="date"
                required={true}
                inputFormat="yyyy-MM-dd"
              />
            </LocalizationProvider>

            <br />
            <button type="submit">Post</button>
          </form>
        )}
      </Form>
    </>
  );
};

export default ReviewForm;
