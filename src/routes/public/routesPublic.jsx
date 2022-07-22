import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutMe, NotFound } from "../../screens";

const RoutesPublic = () => {
  return (
    <Routes>
      <Route path={`about-me`} element={<AboutMe />} />
      <Route element={<NotFound />} />
    </Routes>
  );
};
export default RoutesPublic;
