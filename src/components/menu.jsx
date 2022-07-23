import React from "react";
export const Menu = () => {
  return (
    <nav>
      <a className={"gap"} href="/portfolio">
        Home
      </a>
      <a className={"gap"} href="/portfolio/public/about-me">
        About me
      </a>
      <a className={"gap"} href="/portfolio/public/projects">
        My Projects
      </a>
    </nav>
  );
};
