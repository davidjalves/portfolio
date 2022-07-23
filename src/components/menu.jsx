import React from "react";
import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <nav>
      <Link className={"gap"} to="/">
        Home
      </Link>
      <Link className={"gap"} to="/about">
        About me
      </Link>
      <Link className={"gap"} to="/projects">
        My projects
      </Link>
    </nav>
  );
};
