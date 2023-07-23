import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Activity1 from "../Pages/index";
import Activity2 from "../Pages/activity2";
import Activity3 from "../Pages/activity3";

// Paths
export const Paths = {
  Activity: "/",
  Activity1: "/Activity1",
  Activity2: "/Activity2",
  Activity3: "/Activity3",
};

const Router = () => {
  return (
    <Routes>
      <Route
      index
      path={Paths.Activity}
      element={
      <Activity1/> 
    }
    />
      <Route
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
    </Routes>
  );
};

export default Router;
