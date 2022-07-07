import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

const CusTextField = ({ type, label, name, value, handleChange }) => {
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth>
        <TextField
          onChange={handleChange}
          variant="outlined"
          label={label}
          name={name}
          value={value}
          type={type}
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default CusTextField;
