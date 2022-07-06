import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/authSlice";

const Container = styled(Box)(({ theme }) => ({
  height: "90vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.white,
}));

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onExplore = () => {
    const randomName = Math.floor(Math.random() * 20 + Math.random() * 20);
    dispatch(setUser("user" + randomName));
    navigate("/categories");
  };

  useEffect(() => {
    if (user !== null) navigate("/categories");
  }, []);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        onExplore();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <Container>
      <Typography variant="h5" textTransform="uppercase" color="primary" mb={1}>
        Explore to enrich your knowledge
      </Typography>
      <Typography
        variant="caption"
        textTransform="uppercase"
        color="GrayText"
        mb={4}
      >
        This helps you to build your knowledge stronger.
      </Typography>
      <Button
        variant="contained"
        sx={{ boxShadow: 7 }}
        size="large"
        onClick={(e) => onExplore(e)}
      >
        Explore Quizes
      </Button>
    </Container>
  );
};

export default Homepage;
