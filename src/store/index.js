import authSlice from "./authSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import quizSlice from "./quizSlice";

const reducers = combineReducers({
  auth: authSlice,
  quiz: quizSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "quiz"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_ENVIRONMENT === "dev",
  middleware: [thunk],
});
