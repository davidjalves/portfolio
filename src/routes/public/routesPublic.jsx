import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutMe, NotFound, Projects } from "../../screens";

const RoutesPublic = () => {
  return (
    <Routes>
      <Route path={`about-me`} element={<AboutMe />} />
      <Route path={`projects`} element={<Projects />} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};
export default RoutesPublic;
