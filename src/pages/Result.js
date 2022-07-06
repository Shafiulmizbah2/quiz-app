import React from "react";
import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { teal } from "@mui/material/colors";

const Header = styled(Box)(({ theme }) => ({
  height: "30vh",
  width: "100%",
  backgroundColor: teal[800],
}));

const Result = () => {
  return (
    <>
      <Header>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography variant="h3" color="whitesmoke">
            Your Score is : 80 / 100
          </Typography>
        </Container>
      </Header>

      <Box>
        <Container>
          <Typography
            variant="h5"
            color="primary"
            my={4}
            textTransform="uppercase"
          >
            User Statistics
          </Typography>
          <Box>list goes here</Box>
        </Container>
      </Box>
    </>
  );
};

export default Result;
