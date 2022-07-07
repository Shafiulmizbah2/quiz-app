import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllQuizes, getCategories, setSelected } from "../store/quizSlice";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import CusTextField from "../components/CusTextField";

const difficultyOptions = [
  { id: "easy", name: "Easy" },
  { id: "medium", name: "Medium" },
  { id: "hard", name: "Hard" },
];

const typeOptions = [
  { id: "multiple", name: "Multiple choice" },
  { id: "boolean", name: "True/False" },
];

const Categories = () => {
  const [formValue, setFormValue] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, categories } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(setSelected());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `/api.php?amount=${
      formValue.amount ? +formValue.amount : 10
    }&category=${formValue.category ? +formValue.category : 9}&difficulty=${
      formValue.difficulty ? formValue.difficulty : "easy"
    }&type=${formValue.type ? formValue.type : "multiple"}`;

    dispatch(setSelected());
    dispatch(getAllQuizes(url));
    navigate("/quiz");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        handleSubmit(event);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  if (error.categories) {
    return (
      <Box my={30}>
        <Typography variant="h3" color="error">
          {error.categories}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "60vh",
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
        <Grid
          container
          spacing={3}
          sx={{
            height: "100%",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Grid
            item
            md={7}
            sx={{
              display: { sm: "none", xs: "none", md: "block" },
              height: "80%",
              width: "80%",
            }}
          >
            <img
              style={{ height: "80%", width: "80%" }}
              src="./images/settings.svg"
              alt="settings image"
            />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <Typography variant="h5" color="GrayText" textAlign="center">
              Select Quiz Options
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              <SelectField
                options={categories}
                label="Category"
                handleChange={handleChange}
                name="category"
                value={formValue.category}
              />
              <SelectField
                options={difficultyOptions}
                label="Difficulty"
                handleChange={handleChange}
                name="difficulty"
                value={formValue.difficulty}
              />
              <SelectField
                options={typeOptions}
                label="Type"
                handleChange={handleChange}
                name="type"
                value={formValue.type}
              />
              <CusTextField
                type="number"
                label="Amount of questions"
                handleChange={handleChange}
                name="amount"
                value={formValue.amount}
              />
              <Box mt={3}>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={loading.allQuiz}
                >
                  Get started
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
