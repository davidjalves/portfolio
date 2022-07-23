import React, { useState } from "react";
import { TypeText } from "../components";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

export const AboutMe = () => {
  const [isEnded, setIsEnded] = useState(0);

  return (
    <div>
      <b>
        <TypeText
          text={"About me"}
          style={{ fontSize: 60 }}
          setIsEnded={setIsEnded}
        />
      </b>
      {isEnded >= 1 && (
        <>
          {" "}
          <div style={{ fontSize: 20, paddingBottom: "10cm" }}>
            I'm David Ressurreição, a software engineer from Portugal.<br></br>
            My degree in Telecommunications and computer engineering prepared me
            to multiple areas, like electronics, networks and programming. I
            specialized in the programming area, but I have the knowledge to
            change between this different areas at any time.
            <br></br>
            <br></br>
            These are my professional networks profiles:<br></br>
            -Gihub:
            <a href="https://github.com/davidjalves">
              <FaGithub
                size={40}
                color={"black"}
                onMouseOver={({ target }) => (target.style.color = "white")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </a>
            <br></br>
            -Linkedin:
            <a href="https://www.linkedin.com/in/david-jralves/">
              <FaLinkedin
                size={40}
                color={"black"}
                onMouseOver={({ target }) => (target.style.color = "white")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </a>
            <br></br>
            -StackOverflow:
            <a href="https://stackoverflow.com/users/15427069/david-alves">
              <FaStackOverflow
                size={40}
                color={"black"}
                onMouseOver={({ target }) => (target.style.color = "white")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </a>
          </div>
          <center>David Ressurreição&copy;{new Date().getFullYear()}</center>
        </>
      )}
    </div>
  );
};
