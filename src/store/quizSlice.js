import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

const initialState = {
  allQuiz: [],
  categories: [],
  loading: { allQuiz: true, categories: true },
};

export const getAllQuizes = () => async (dispatch) => {
  const res = await axiosInstance.get();
  dispatch(setAllQuiz(res.data.results));
  dispatch(setCategories());
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAllQuiz: (state, { payload }) => {
      state.allQuiz = payload;
      state.loading.allQuiz = false;
    },
    setCategories: (state) => {
      state.categories = [
        ...new Set(state.allQuiz.map((item) => item.category)),
      ];
      state.loading.categories = false;
    },
  },
});

export const { setAllQuiz, setCategories } = quizSlice.actions;
export default quizSlice.reducer;
