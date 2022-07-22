import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home, NotFound } from "../screens";
import RoutesPublic from "./public/routesPublic";

const MainRoutes = () => {
  return (
    <>
      <nav>
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />

          <Route path="/portfolio/public/*" element={<RoutesPublic />} />

          <Route element={<NotFound />} />
        </Routes>
      </nav>
      <Outlet />
    </>
  );
};

export default MainRoutes;
