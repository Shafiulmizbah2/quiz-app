import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/authSlice";
import { removeStatistics, setSelected } from "../store/quizSlice";
import storage from "redux-persist/lib/storage";

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
    navigate("/home");
  };

  useEffect(() => {
    if (user !== null) navigate("/home");
  }, []);

  useEffect(() => {
    if (user === null) {
      dispatch(removeStatistics());
      dispatch(setSelected());
    }
  }, [user]);

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
        onClick={() => onExplore()}
      >
        Explore Quizes
      </Button>
    </Container>
  );
};

export default Homepage;
