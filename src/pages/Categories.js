import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuizes } from "../store/quizSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, categories } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getAllQuizes());
  }, []);

  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "100%",
          width: "100%",
          py: 5,
        }}
      >
        {/* chaeck is loading */}
        {loading.categories && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <CircularProgress size={70} />
          </Box>
        )}
        {/* chaeck is loading false & category size is 0 */}
        {!loading.categories && categories.length === 0 && (
          <Typography variant="h5" color="red">
            No Categories found!
          </Typography>
        )}
        {/* mapping categories */}
        {!loading.categories &&
          categories.length !== 0 &&
          categories.map((category) => (
            <Box key={category} m={1} sx={{ boxShadow: 3, width: "20rem" }}>
              <Card>
                <CardContent sx={{ boxShadow: 3 }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                    textTransform="uppercase"
                  >
                    Start quiz by clicking start Quiz button
                  </Typography>

                  <Typography variant="h5" noWrap={true}>
                    {category}
                  </Typography>
                  <CardActions>
                    <Button size="small">Start quiz</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          ))}
      </Container>
    </Box>
  );
};

export default Categories;
