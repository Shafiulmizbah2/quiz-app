import { createSlice } from "@reduxjs/toolkit";

const initialState = { allQuiz: [], categories: [] };

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAllQuiz: (state, { payload }) => {
      state.user = payload;
    },
    setCategories: (state) => {
      state.categories = [];
    },
  },
});

export const { setAllQuiz, setCategories } = quizSlice.actions;
export default quizSlice.reducer;
