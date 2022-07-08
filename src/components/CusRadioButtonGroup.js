import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CusRadioButtonsGroup = ({ handleChange }) => {
  const { selectedQuiz, loading, allQuiz } = useSelector((state) => state.quiz);

  if (loading.selectedQuiz) {
    return (
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={60} color="primary" />
      </Box>
    );
  }

  if (!selectedQuiz || allQuiz.length === 0) {
    return (
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="red" variant="h3">
          No Question found!
        </Typography>
      </Box>
    );
  }

  return (
    <FormControl>
      <Typography variant="h4" color="GrayText">
        {selectedQuiz?.question}
      </Typography>
      <Typography variant="caption" color="GrayText">
        Category : {selectedQuiz?.category} || Difficulty :{" "}
        {selectedQuiz?.difficulty}
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name={selectedQuiz?.question}
        onChange={handleChange}
      >
        {selectedQuiz?.questions?.map((item) => (
          <FormControlLabel
            value={item}
            control={<Radio />}
            label={item}
            key={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CusRadioButtonsGroup;
