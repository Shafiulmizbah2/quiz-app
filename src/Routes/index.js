import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Welcome from "../pages/Welcome";
import PageNotFound from "../pages/PageNotFound";
import QuizPage from "../pages/QuizPage";
import Result from "../pages/Result";
import ProtectedRoute from "./ProtectedRoutes";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      {/* <ProtectedRoute path="/categories" Element={<Categories />} /> */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/result"
        element={
          <ProtectedRoute>
            <Result />
          </ProtectedRoute>
        }
      />

      <Route
        path="/quiz"
        element={
          <ProtectedRoute>
            <QuizPage />
          </ProtectedRoute>
        }
      />

      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
