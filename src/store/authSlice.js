import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { setInitialState } from "./quizSlice";

const initialState = { user: null };

export const logout = () => async (dispatch, getState) => {
  storage.removeItem("persist:root");
  dispatch(removeUser());
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    removeUser: (state, actions) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
