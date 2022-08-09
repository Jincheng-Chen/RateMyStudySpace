import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import header_Logo from ".././images/header_logo.png";
import { useNavigate } from "react-router-dom";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={{ top: 0, height: "max-content", width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            Rate My Study Space
          </Typography>
          <Button onClick={() => navigate("/newStudySpace")} color="inherit">
            <AddLocationAltIcon />
            New Study Space
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
