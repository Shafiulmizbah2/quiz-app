import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { teal } from "@mui/material/colors";
import { useSelector } from "react-redux";

const Header = styled(Box)(({ theme }) => ({
  height: "30vh",
  width: "100%",
  backgroundColor: teal[800],
}));

const Result = () => {
  const { state } = useLocation();
  const { statistics } = useSelector((state) => state.quiz);
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
          {state?.marks >= 0 && state?.total >= 0 ? (
            <Typography variant="h3" color="whitesmoke">
              Your Score is :{" "}
              <span style={{ fontSize: "4.5rem" }}>{state.marks}</span> /{" "}
              {state.total}
            </Typography>
          ) : (
            <Typography variant="h3" color="whitesmoke">
              "Your Score lists"
            </Typography>
          )}
        </Container>
      </Header>

      <Box>
        <Container>
          <Typography
            variant="h5"
            color="primary"
            my={4}
            textTransform="uppercase"
            textAlign="center"
          >
            User Statistics
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                my: 2,
              }}
            >
              <Typography variant="h6" color="primary">
                Category
              </Typography>
              <Typography variant="h6" color="primary">
                Marks
              </Typography>
            </Box>
            {statistics.map((item) => (
              <Box key={item.category + Math.random() * 30}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    my: 2,
                  }}
                >
                  <Typography variant="h6" color="gray">
                    {item.category}
                  </Typography>
                  <Typography variant="h6" color="gray">
                    {item.marks}
                  </Typography>
                </Box>
                <Divider />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Result;
