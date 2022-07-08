import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz App
          </Typography>
          {user && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  sx={{ px: 5 }}
                  onClick={() => {
                    handleClose();
                  }}
                >
                  {user}
                </MenuItem>
                <MenuItem
                  sx={{ px: 5 }}
                  onClick={() => {
                    handleClose();
                    navigate("/home");
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  sx={{ px: 5 }}
                  onClick={() => {
                    handleClose();
                    navigate("/result");
                  }}
                >
                  Result
                </MenuItem>
                <MenuItem
                  sx={{ px: 5 }}
                  onClick={() => {
                    handleClose();
                    dispatch(logout());
                  }}
                >
                  Log out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
