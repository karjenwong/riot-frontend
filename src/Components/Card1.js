import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Card1({value}) {
    let [a,b] = value
    return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{a}</Card.Title>
        <Card.Text>{b}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Card1;
