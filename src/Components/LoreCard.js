import React from "react";
import Card from "react-bootstrap/Card";

function LoreCard({ value }) {
  let [name, title,] = value;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LoreCard;
