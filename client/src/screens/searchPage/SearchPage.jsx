import React, { useState, useEffect } from "react";
import { Box, CardActionArea, Card } from "@mui/material";
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
    position: "relative",
    width: "90%",
    top: "-6vh",
  },
  grid: {},
  mapContainer: {
    marginBottom: "3vh",
  },
});

function SearchPage() {
  const location = useLocation();

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
        if (
          studySpace.coordinates.coordinates[1] &&
          studySpace.coordinates.coordinates[0]
        ) {
          markerArr.push({
            lat: studySpace.coordinates.coordinates[1],
            lng: studySpace.coordinates.coordinates[0],
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
        <Filters
          stateChanger={setStudySpaces}
          location={{
            lat: location.state.lat,
            lon: location.state.lon,
            radius: location.state.radius,
          }}
        />
      </Box>
      <Box className={classes.bottomContainer}>
        <Card className={classes.mapContainer}>
          <MapComponent
            markers={markers}
            lat={location.state.lat}
            lon={location.state.lon}
          ></MapComponent>
        </Card>
        {studySpaces.length > 0 ? (
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
        ) : (
          <Box>No Study Spaces in this area</Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchPage;
