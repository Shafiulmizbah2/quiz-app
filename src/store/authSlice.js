import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialState = { user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      storage.removeItem("persist:root");
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
