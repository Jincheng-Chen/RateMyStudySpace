import { Modal, Input, InputLabel, Button, Card } from "@mui/material";
import React, { useState } from "react";
import { useAddImageMutation } from "../../features/api/studySpaceApiSlice";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  input: {
    width: "30vw",
  },
  modalCard: {
    width: "40vw",
    height: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1vw",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
function SubmitPictureModal({ setClosed, open, studySpace }) {
  const classes = useStyles();
  const [addImage] = useAddImageMutation();
  const [picture, setPicture] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPicture(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("picture", picture);
    addImage({ studySpaceId: studySpace._id, imageUrl: picture });
    setPicture("");
    setClosed();
  };
  return (
    <Modal
      open={open}
      onClose={setClosed}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className={classes.modal}
    >
      <Card className={classes.modalCard}>
        <form>
          <InputLabel htmlFor="sp-image">Image URL</InputLabel>
          <Input
            id="sp-image"
            aria-describedby="helper-image"
            name={"url"}
            value={picture}
            onChange={handleInputChange}
            className={classes.input}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit Picture
          </Button>
        </form>
      </Card>
    </Modal>
  );
}

export default SubmitPictureModal;
