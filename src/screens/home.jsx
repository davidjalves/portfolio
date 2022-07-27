import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import updates from "../data/updates.json";
import { TypeText, UpdateCard } from "../components";
export const Home = () => {
  const [isEnded, setIsEnded] = useState(0);
  return (
    <div
      style={{
        paddingLeft: "5mm",
        paddingRight: "10mm",
        // textAlign: "justify",
        // textJustify: "inter-word",
      }}
    >
      <b>
        <TypeText
          text={"David"}
          style={{ fontSize: 50 }}
          setIsEnded={setIsEnded}
        />
        {isEnded >= 1 && (
          <TypeText
            style={{ fontSize: 50 }}
            text={"Ressurreição"}
            setIsEnded={setIsEnded}
          />
        )}
      </b>
      {isEnded >= 2 && (
        <>
          <div style={{ fontSize: 30 }}>Software engineer</div>
          <div
            style={{
              display: "flex",
              paddingLeft: "2mm",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Form.Group
              as={Col}
              md="11"
              style={{ paddingTop: "1mm", paddingBottom: "10cm" }}
            >
              <center style={{ paddingTop: "5mm", fontSize: 20 }}>
                Updates:
              </center>
              <Row>
                {updates.map((update, index) => (
                  <UpdateCard updateObj={update} />
                ))}
              </Row>
            </Form.Group>
          </div>
          <center>David Ressurreição&copy;{new Date().getFullYear()}</center>
        </>
      )}
    </div>
  );
};
