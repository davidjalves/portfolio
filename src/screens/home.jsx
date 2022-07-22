import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <Link to="/public/about-me">
        <Button>ab</Button>
      </Link>
      <br></br>
    </div>
  );
};
