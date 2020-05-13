import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Card2({ value }) {
  let [title, list] = value;
  list = list.map((x, i) => <ListGroup.Item key={i}>{x}</ListGroup.Item>);
  return (
    <Card style={{ width: "18rem" }} className="sameHeight">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush">{list}</ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Card2;
