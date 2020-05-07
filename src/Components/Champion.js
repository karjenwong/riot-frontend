import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Champion({ info }) {
  let [obj, strings] = [[], []];
  Object.keys(info).map((x) =>
    typeof info[x] == "string" ? strings.push(x) : obj.push(x)
  );

  strings = strings.map((x, i) => {
    return (
      <Card style={{ width: "18rem" }} key={i}>
        <Card.Body>
          <Card.Title>{x}</Card.Title>
          <Card.Text>{info[x]}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="champion">
      <h1>Champ</h1>
      <div className="flex">{strings}</div>
    </div>
  );
}

export default Champion;
