import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const text = location.pathname.startsWith("/edit")
    ? "Edit Contact"
    : location.pathname === "/add"
    ? "Add Contact"
    : "Contacts";
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fafafa", color: "#263238", boxShadow: "none" }}
      >
        <Toolbar disableGutters>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {text}
          </Typography>
          {text === "Contacts" && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={(event) => {
                event.preventDefault();
                navigate("/add");
              }}
            >
              <AddIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
