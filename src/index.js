import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRoutes from "./routes/mainroutes";
import { HashRouter} from "react-router-dom";
export const MAINROUTE = "/portfolio";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MainRoutes />
    </HashRouter>
  </React.StrictMode>
);
