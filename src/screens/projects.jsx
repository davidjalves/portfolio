import React, { useState } from "react";
import {Row,Form,Col,Card} from "react-bootstrap"
import { TypeText } from "../components";
export const Projects = () => {
  const [isEnded, setIsEnded] = useState(0);

  return (
    <div>
      <b>
        <TypeText
          text={"My projects"}
          style={{ fontSize: 60 }}
          setIsEnded={setIsEnded}
        />
      </b>
      {isEnded >= 1 && (
        <>
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
