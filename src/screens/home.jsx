import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
export const Home= () => {
  return (
    <div>
     <Link to="/public/about-me"> about me</Link>
     <br></br>
     <Button href="/portfolio#/public/about-me">ab</Button>
    </div>
  );
};
