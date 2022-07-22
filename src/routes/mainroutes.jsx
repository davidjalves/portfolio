import React from "react";
import { Routes, Route} from "react-router-dom";
import { Home, NotFound } from "../screens";
import RoutesPublic from "./public/routesPublic";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Home />} />

        <Route path="/public/*" element={<RoutesPublic />} />

        <Route element={<NotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
