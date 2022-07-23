import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "../components";
import { AboutMe, Home, NotFound, Projects } from "../screens";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Menu />
    </>
  );
};

export default MainRoutes;
