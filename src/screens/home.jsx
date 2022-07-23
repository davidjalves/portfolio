import React, { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

//import { useNavigate } from "react-router-dom";
import { TypeText } from "../components";
export const Home = () => {
  const [isEnded, setIsEnded] = useState(0);
  //let history = useNavigate();
  return (
    <div>
      {/* <Link to="/public/about-me">
      </Link>
      <a
        onClick={() => {
          history("/public/about-me");
        }}
      >
        aaa
      </a> */}
      <b>
        <TypeText
          text={"David"}
          style={{ fontSize: 60 }}
          setIsEnded={setIsEnded}
        />
        {isEnded >= 1 && (
          <TypeText
            style={{ fontSize: 60 }}
            text={"Ressurreição"}
            setIsEnded={setIsEnded}
          />
        )}
      </b>
      {isEnded >= 2 && (
        <TypeText
          style={{ fontSize: 30 }}
          text={"Software engineer"}
          setIsEnded={setIsEnded}
        />
      )}
      {isEnded >= 3 && (
        <>
          <center style={{ paddingTop: "5mm", fontSize: 20 }}>Updates:</center>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Form.Group
              as={Col}
              md="11"
              style={{ paddingTop: "1mm", paddingBottom: "10cm" }}
            >
              <Row>
                {Array.from({ length: 11 }).map((_, idx) => (
                  <Col md="4" style={{ paddingTop: "2mm" }}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </div>
          <center>David Ressurreição&copy;{new Date().getFullYear() }</center>
        </>
      )}
    </div>
  );
};
