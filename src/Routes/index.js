import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Categories from "../pages/Categories";
import Homepage from "../pages/Homepage";
import ProtectedRoute from "./ProtectedRoutes";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <ProtectedRoute path="/categories" Element={<Categories />} /> */}
      <Route
        path="/categories"
        element={
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
