import React from "react";
import "../../styles/HeaderStyle.css";
import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <FastfoodIcon sx={{ color: "goldenrod", marginRight: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Restaurant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link to={"/"}> Home</Link>
              </li>
              <li>
                <Link to={"/about"}> About Us</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
