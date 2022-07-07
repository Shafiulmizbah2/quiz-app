import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

const initialState = {
  allQuiz: [],
  categories: [],
  selectedQuiz: {},
  statistics: [],
  loading: {
    allQuiz: false,
    categories: false,
    selectedCategories: false,
    selectedQuiz: false,
  },
  error: { allQuiz: "", categories: "", selectedCategories: "" },
};

export const getAllQuizes = (query) => async (dispatch) => {
  try {
    dispatch(setLoading({ type: "allQuiz", value: true }));
    dispatch(setLoading({ type: "selectedQuiz", value: true }));
    dispatch(setError({ type: "allQuiz", text: "" }));

    const res = await axiosInstance.get(query);
    dispatch(setAllQuiz(res.data.results));
    dispatch(setSelected(res.data.results[0]));
    dispatch(setLoading({ type: "allQuiz", value: false }));
    dispatch(setLoading({ type: "selectedQuiz", value: false }));
  } catch (error) {
    dispatch(setLoading({ type: "allQuiz", value: false }));
    dispatch(setLoading({ type: "selectedQuiz", value: false }));
    dispatch(setError({ type: "allQuiz", text: error.message }));
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(setLoading({ type: "categories", value: true }));
    dispatch(setError({ type: "categories", text: "" }));

    const res = await axiosInstance.get("/api_category.php");
    dispatch(setLoading({ type: "categories", value: false }));
    dispatch(setCategories(res.data.trivia_categories));
  } catch (error) {
    dispatch(setLoading({ type: "categories", value: false }));
    dispatch(setError({ type: "categories", text: error.message }));
  }
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setInitialState: (state) => {
      console.log(state);
      state = initialState;
    },
    setAllQuiz: (state, { payload }) => {
      state.allQuiz = payload;
      state.loading.allQuiz = false;
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
      state.loading.categories = false;
    },
    setSelected: (state, { payload }) => {
      if (payload) {
        state.selectedQuiz = {
          ...payload,
          questions: [
            ...payload?.incorrect_answers,
            payload?.correct_answer,
          ].sort(),
        };
      } else {
        state.selectedQuiz = {};
      }
    },
    setStatistics: (state, { payload }) => {
      state.statistics = state.statistics.concat([{ ...payload }]);
    },
    removeStatistics: (state) => {
      state.statistics = [];
    },
    setLoading: (state, { payload }) => {
      state.loading[payload.type] = payload.value;
    },
    setError: (state, { payload }) => {
      state.loading[payload.type] = false;
      state.error[payload.type] = payload.text;
    },
  },
});

export const {
  setInitialState,
  setAllQuiz,
  setCategories,
  setSelected,
  setStatistics,
  removeStatistics,
  setError,
  setLoading,
} = quizSlice.actions;
export default quizSlice.reducer;
