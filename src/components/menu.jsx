import React from "react";
import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <nav>
      <Link className={"gap"} to="/">
        Home
      </Link>
      <Link className={"gap"} to="/public/about-me">
        About me
      </Link>
      <Link className={"gap"} to="/public/projects">
        My Projects
      </Link>
    </nav>
  );
};
