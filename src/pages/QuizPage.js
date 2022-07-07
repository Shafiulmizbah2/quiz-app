import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import CusRadioButtonsGroup from "../components/CusRadioButtonGroup";
import { setSelected, setStatistics } from "../store/quizSlice";

const QuizPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quizValue, setQuizValue] = useState({});
  const [current, setCurrent] = useState(0);
  const [disable, setDisable] = useState({
    prev: false,
    skip: false,
    next: false,
  });
  const { allQuiz, selectedQuiz } = useSelector((state) => state.quiz);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuizValue({ ...quizValue, [name]: value });
  };

  const handleNext = () => {
    let index = allQuiz.findIndex(
      (item) => item.question === selectedQuiz.question
    );

    if (index >= allQuiz.length - 1) {
      setDisable({ prev: false, skip: true, next: true });
    } else {
      setDisable({ prev: false, skip: false, next: false });
      dispatch(setSelected(allQuiz[index + 1]));
      setCurrent(index + 1);
    }
  };

  const handlePrev = () => {
    let index = allQuiz.findIndex(
      (item) => item.question === selectedQuiz.question
    );

    if (index <= 0) {
      setDisable({ prev: true, skip: false, next: false });
    } else {
      setDisable({ prev: false, skip: false, next: false });
      dispatch(setSelected(allQuiz[index - 1]));
      setCurrent(index - 1);
    }
  };

  const handleSubmit = () => {
    let marks = 0;
    let total = allQuiz.length * 5;
    let category = allQuiz[0].category;

    allQuiz.filter((item) => {
      if (quizValue[item.question]) {
        if (quizValue[item.question] === item.correct_answer) marks += 5;
      }
    });

    dispatch(setStatistics({ category, marks }));
    navigate("/result", {
      state: {
        marks,
        total,
      },
      replace: true,
    });
  };

  return (
    <Box>
      <Container
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box my={5}>
          <CusRadioButtonsGroup handleChange={handleChange} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            my: 3,
          }}
        >
          <Box>
            <Button onClick={handlePrev} disabled={disable.prev}>
              Previous
            </Button>
            <Button disabled={disable.next} onClick={handleNext}>
              Skip
            </Button>
            <Button onClick={handleNext} disabled={disable.next}>
              Next
            </Button>
          </Box>
          <Box>
            <Typography variant="body1" color="primary">
              {allQuiz.length === 0 ? 0 : current + 1} / {allQuiz.length}
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" size="large" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default QuizPage;
