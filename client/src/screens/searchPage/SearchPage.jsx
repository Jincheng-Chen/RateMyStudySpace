import React, { useState, useEffect } from "react";
import { Box, Typography, CardActionArea, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StudySpaceReview from "./StudySpaceReview";
import { useNavigate, useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Filters from "./Filters";
import MapComponent from "./MapComponent";

const useStyles = makeStyles({
  outerContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: "100%",
    alignItems: "center",
  },
  topContainer: {},
  bottomContainer: {
    width: "90%",
  },
  grid: {},
  mapContainer: {
    marginTop: "3vh",
    marginBottom: "3vh",
  },
});

function SearchPage() {
  const location = useLocation();
  //const locToSearch = location.state.city;

  const navigate = useNavigate();
  const classes = useStyles();
  const [studySpaces, setStudySpaces] = useState([]);
  const [markers, setMarkers] = useState([]);
  const locToSearch = "Vancouver";
  useEffect(() => {
    if (locToSearch === null) {
      return navigate("/");
    }
  }, [location]);

  useEffect(() => {
    let markerArr = [];
    if (studySpaces) {
      studySpaces.forEach((studySpace) => {
        if (studySpace.lat && studySpace.lon) {
          markerArr.push({
            lat: studySpace.lat,
            lng: studySpace.lon,
            text: studySpace.name,
            studySpace: studySpace,
          });
        }
      });
    }
    setMarkers(markerArr);
  }, [studySpaces]);

  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.topContainer}>
        <Typography variant={"h5"} component={"h2"}>
          Filter Options
        </Typography>
        <Filters stateChanger={setStudySpaces} location={locToSearch} />
      </Box>
      <Box className={classes.bottomContainer}>
        <Typography variant={"h5"} component={"h2"}>
          Search Results
        </Typography>
        <Card className={classes.mapContainer}>
          <MapComponent markers={markers}></MapComponent>
        </Card>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "5rem",
            type: "loop",
          }}
        >
          {studySpaces?.map((space) => {
            return (
              <SplideSlide key={space._id}>
                <CardActionArea
                  onClick={() => navigate("/studySpace", { state: space })}
                >
                  <StudySpaceReview studySpace={space}></StudySpaceReview>
                </CardActionArea>
                <br />
                <br />
              </SplideSlide>
            );
          })}
        </Splide>
      </Box>
    </Box>
  );
}

export default SearchPage;
