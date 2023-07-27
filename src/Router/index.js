import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Question1 from "../Pages/Question1";
import Question2 from "../Pages/Question2";
import Question3 from "../Pages/Question3";

// Paths
export const Paths = {
  Question: "/",
  Question1: "/Question1",
  Question2: "/Question2",
  Question3: "/Question3",
};

const Router = () => {
  return (
    <Routes>
      <Route
      index
      path={Paths.Question}
      element={
      <Question1/> 
    }
    />
      <Route
      path={Paths.Question1}
      element={
      <Question1/> 
    }
    />
      <Route
      path={Paths.Question2}
      element={
      <Question2/> 
    }
    />
      <Route
      path={Paths.Question3}
      element={
      <Question3/> 
    }
    />
    </Routes>
  );
};

export default Router;
