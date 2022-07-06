import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  height: "90vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: theme.palette.white,
  backgroundImage: `url(./404.webp)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h3" color="gray" my={1}>
        Page Not found
      </Typography>
      <Button onClick={() => navigate("/")} variant="contained">
        Go to Home
      </Button>
    </Container>
  );
};

export default PageNotFound;
