import React from "react";
import { Col, Card, Button } from "react-bootstrap";

export const UpdateCard = ({ updateObj }) => {
  return (
    <Col md="3" style={{ paddingTop: "2mm" }}>
      <Card>
        <Card.Body>
          <Card.Title>{updateObj.title}</Card.Title>
          <Card.Text>
            {updateObj.description}
            <hr></hr>
            {updateObj.date}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href={updateObj.link}>More info</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};
