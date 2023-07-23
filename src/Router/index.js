import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Activity1 from "../Pages/index";
import Activity2 from "../Pages/activity2";
import Activity3 from "../Pages/activity3";
import Test from "../Pages/test";

// Paths
export const Paths = {
  Activity1: "/Activity1",
  Activity2: "/Activity2",
  Activity3: "/Activity3",
  test: "/test",
};

const Router = () => {
  return (
    <Routes>
      <Route
      index
      path={Paths.Activity1}
      element={
      <Activity1/> 
    }
    />
      <Route
      path={Paths.Activity2}
      element={
      <Activity2/> 
    }
    />
      <Route
      path={Paths.Activity3}
      element={
      <Activity3/> 
    }
    />
      <Route
      path={Paths.test}
      element={
      <Test/> 
    }
    />
    </Routes>
  );
};

export default Router;
