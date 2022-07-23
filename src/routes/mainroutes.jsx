import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "../components";
import { Home, NotFound } from "../screens";
import RoutesPublic from "./public/routesPublic";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/public/*" element={<RoutesPublic />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Menu />
    </>
  );
};

export default MainRoutes;
