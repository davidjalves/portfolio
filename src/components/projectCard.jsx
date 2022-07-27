import React from "react";
import { Col, Card, Button } from "react-bootstrap";

export const ProjectCard = ({ projectObj }) => {
  //in localhost add portfolio before image link

  return (
    <Col md="4" style={{ paddingTop: "2mm", minWidth: "7cm" }}>
      <Card>
        <Card.Img src={projectObj.image}></Card.Img>
        <Card.Body>
          <Card.Title>
            <b>{projectObj.title}</b>
          </Card.Title>
          <Card.Text>
            <b>Description:</b>
            <br></br>
            {projectObj.description}
            <br></br>
            <b>Technologies:</b>
            <br></br>
            <ul>
              {projectObj.techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <Button href={projectObj.link}>Website</Button>
          <Button variant="success" href={projectObj.source}>
            Source code
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};
