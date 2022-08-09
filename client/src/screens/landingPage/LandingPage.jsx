import React, { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Card,
  Rating,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import image from '../../shared/images/LandingPageBackground'
import { useNavigate } from "react-router-dom";
import image from "../../shared/images/LandingPageBackground.jpg";
import SanFransisco from "../../shared/images/SanFransisco.jpg";
import Vancouver from "../../shared/images/vancouver.jpg";
import Toronto from "../../shared/images/toronto.jpg";
import SearchBar from "../../shared/components/SearchBar";
import ComputerIcon from "@mui/icons-material/Computer";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import MapIcon from "@mui/icons-material/Map";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import QueryButton from "../../shared/components/QueryButton";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import header_logo from "../../shared/images/header_logo.png";
import laptopCoffee from "../../shared/images/laptop-coffee.jpg";
import "@splidejs/react-splide/css";

const useStyles = makeStyles({
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
  },
  outerContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    paddingBottom: "10vh",
    minWidth: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    background: `linear-gradient(rgba(255,255,255,.25), rgba(255,255,255,.25)), url(${laptopCoffee})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    height: "50%",
    minWidth: "100%",
    minHeight: "31vh",
    display: "flex",
    flexDirection: "row",
    paddingTop: "2vh",
    backgroundColor: "rgba(249,250,251)",
    paddingBottom: "2vh",
  },
  lastContainer: {
    height: "50%",
    width: "88%",
    display: "flex",
    paddingTop: "5vh",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: "#000000",
  },
  searchBarPos: {
    padding: ".5vw",
    borderRadius: ".25vw",
  },
  card: {
    width: "30%",
    marginLeft: "10vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  infoBox: {
    width: "70%",
    marginLeft: "5vw",
  },
  infoCard: {
    width: "30%",
    marginLeft: "4vw",
    marginRight: "4vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textIconBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2vh",
    justifyContent: "center",
  },
  icon: {
    "& svg": {
      fontSize: 100,
    },
  },
  grid: {
    marginTop: "3vh",
    marginBottom: "5vh",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
  },
});
function LandingPage() {
  const buttonCityArray = [
    {
      label: "Vancouver",
      url: Vancouver,
      id: 1,
    },
    {
      label: "San Fransisco",
      url: SanFransisco,
      id: 2,
    },
    {
      label: "Toronto",
      url: Toronto,
      id: 3,
    },
  ];

  const cities = ["Vancouver", "San Fransisco", "Toronto"];

  const classes = useStyles();
  const navigate = useNavigate();
  const [radius, setRadius] = useState(5);
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const navigateCallBack = (cityP, descriptionP, latP, lngP) => {
    setCity(cityP);
    setDescription(descriptionP);
    setLat(latP);
    setLon(lngP);
  };

  const onSubmit = () => {
    navigate("/search", {
      state: {
        city: city,
        address: description,
        lat: lat,
        lon: lon,
        radius: radius,
      },
    });
  };

  return (
    <Box className={classes.outerContainer}>
      <Stack className={classes.topContainer}>
        <Box className={classes.logoContainer}>
          <img src={header_logo} alt="" />
        </Box>
        <Card className={classes.searchContainer}>
          <SearchBar
            options={cities}
            propClass={classes.searchBarPos}
            callBack={navigateCallBack}
            width="40vw"
          ></SearchBar>
          <TextField
            id="outlined-number"
            label="Radius (km)"
            type="number"
            value={radius}
            onChange={(event) => setRadius(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" onClick={onSubmit}>
            Search
          </Button>
        </Card>
      </Stack>
      <Box className={classes.bottomContainer}>
        <Box className={classes.infoBox}>
          <Typography variant="h4" bold>
            Revolutionizing the way you search for study locations
          </Typography>
          <Box>
            <Box className={classes.textIconBox}>
              <ComputerIcon
                className={classes.icon}
                fontSize="large"
              ></ComputerIcon>
              <Typography variant="subtitle1" sx={{ marginLeft: "2vw" }}>
                Read Reviews left by people who have been to a study place with
                the same intentions as you.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.textIconBox}>
            <MarkUnreadChatAltIcon fontSize="large"></MarkUnreadChatAltIcon>
            <Typography variant="subtitle1" sx={{ marginLeft: "2vw" }}>
              Leave reviews to help others find the perfect place to study/work!
            </Typography>
          </Box>
          <Box className={classes.textIconBox}>
            <MapIcon fontSize="large"></MapIcon>
            <Typography variant="subtitle1" sx={{ marginLeft: "2vw" }}>
              Find the perfect study location in our map view!
            </Typography>
          </Box>
        </Box>
        <Card className={classes.infoCard}>
          <Typography variant="h5" sx={{ marginTop: "2vh" }}>
            What can you rate by?
          </Typography>
          <Box className={classes.textIconBox}>
            <VolumeDownIcon fontSize="large"></VolumeDownIcon>
            <Typography variant="h6">Noise levels</Typography>
          </Box>
          <Rating name="read-only" value={3} readOnly />
          <Box className={classes.textIconBox}>
            <TableRestaurantIcon fontSize="large"></TableRestaurantIcon>
            <Typography variant="h6">Table Space</Typography>
          </Box>
          <Rating name="read-only" value={5} readOnly />
          <Box className={classes.textIconBox}>
            <AccessTimeIcon fontSize="large"></AccessTimeIcon>
            <Typography variant="h6">Time limit</Typography>
          </Box>
          <Rating name="read-only" value={2} readOnly />
        </Card>
      </Box>
      <Box className={classes.lastContainer}>
        <Typography variant="h4">
          Search study locations in popular cities!
        </Typography>
        <br />
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "8vh",
            type: "loop",
            width: "100%",
          }}
        >
          {buttonCityArray.map((city) => {
            return (
              <SplideSlide key={city.id}>
                <Grid item xs={4} key={city.id}>
                  <QueryButton cityData={city}></QueryButton>
                </Grid>
                <br />
              </SplideSlide>
            );
          })}
        </Splide>
      </Box>
    </Box>
  );
}

export default LandingPage;
