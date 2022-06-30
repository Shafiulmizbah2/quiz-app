import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

const Nav = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz App
          </Typography>
          <Button color="inherit" onClick={() => dispatch(logout())}>
            {user !== null && "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;

// storage.removeItem('persist:root')
