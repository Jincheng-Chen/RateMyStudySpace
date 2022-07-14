import { TextField, Rating, Button } from "@mui/material";
import React from "react";
import { Form, Field } from "react-final-form";
import { Radios } from "mui-rff";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "mui-rff";
import "date-fns";
import { Switches } from "mui-rff";

import { useAddReviewMutation } from "../../../features/api/apiSlice";

const ReviewForm = () => {
  const [addReview] = useAddReviewMutation();

  const addReviewToDB = (values) => {
    addReview(values);
  };
  return (
    <>
      <h1>REACT Final form</h1>
      <Form onSubmit={addReviewToDB}>
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
            <Button type="submit">Post</Button>
          </form>
        )}
      </Form>
    </>
  );
};

export default ReviewForm;
