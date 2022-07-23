import React, { useState } from "react";
import {Row,Form,Col,Card} from "react-bootstrap"
import { TypeText } from "../components";
import projects from "../data/projects.json"
export const Projects = () => {
  const [isEnded, setIsEnded] = useState(0);

  return (
    <div>
      <b>
        <TypeText
          text={"My projects"}
          style={{ fontSize: 50 }}
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
                {projects.map((project,index) => (
                  <Col md="4" key={index} style={{ paddingTop: "2mm" }}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                         {project.description}<br></br>
                         {project.date}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        {project.link}
                      </Card.Footer>
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
