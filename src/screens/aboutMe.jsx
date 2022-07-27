import React, { useState } from "react";
import { TypeText } from "../components";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

export const AboutMe = () => {
  const [isEnded, setIsEnded] = useState(0);

  return (
    <div
      style={{
        paddingLeft: "5mm",
        paddingRight: "10mm",
        textAlign: "justify",
        textJustify: "inter-word",
      }}
      // hyphens: "auto",
      // webkitHyphens: "auto",
    >
      <b>
        <TypeText
          text={"About me"}
          style={{ fontSize: 50 }}
          setIsEnded={setIsEnded}
        />
      </b>
      {isEnded >= 1 && (
        <>
          <div style={{ fontSize: 20, paddingBottom: "5cm" }}>
            I'm David Ressurreição, a software engineer from Portugal.<br></br>
            My degree in Telecommunications and computer engineering prepared me
            to multiple areas, like electronics, networks and programming. I
            specialized in the programming area, but I have the knowledge to
            change between different areas at any time.
            <br></br>
            <br></br>
            <b>I have experience with:</b>
            <br></br>
            -Programming languages:
            <ul>
              <li>Javascript</li>
              <li>Python3</li>
              <li>SQL</li>
              <li>C</li>
              <li>C#</li>
              <li>Java</li>
              <li>MATLAB</li>
            </ul>
            -Web frontend frameworks:
            <ul>
              <li>React.js</li>
              <li>JQuery</li>
            </ul>
            -Web backend frameworks:
            <ul>
              <li>Express.js</li>
            </ul>
            -Database technologies:
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
            -Virtual and augmented reality technologies:
            <ul>
              <li>Unity3D</li>
            </ul>
            <ul></ul>
            <br></br>
            My professional networks:<br></br>
            <ul>
              <li>
                Github:
                <a href="https://github.com/davidjalves">
                  <FaGithub
                    size={40}
                    color={"black"}
                    onMouseOver={({ target }) => (target.style.color = "white")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </a>
              </li>
              <li>
                {" "}
                Linkedin:
                <a href="https://www.linkedin.com/in/david-jralves/">
                  <FaLinkedin
                    size={40}
                    color={"black"}
                    onMouseOver={({ target }) => (target.style.color = "white")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </a>
              </li>
              <li>
                StackOverflow:
                <a href="https://stackoverflow.com/users/15427069/david-alves">
                  <FaStackOverflow
                    size={40}
                    color={"black"}
                    onMouseOver={({ target }) => (target.style.color = "white")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </a>
              </li>
            </ul>
          </div>
          <center>David Ressurreição&copy;{new Date().getFullYear()}</center>
        </>
      )}
    </div>
  );
};
