import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//stats
function Card3({ value }) {
  let [title, stats] = value;
  let { attackrange, movespeed } = stats;

  let perlevel = Object.keys(stats)
    .filter((x) => x.includes("perlevel"))
    .map((x, i) => {
      let base = x.slice(0, x.indexOf("perlevel"));
      return stats[x] * 17 + stats[base] !== stats[base] ? (
        <ListGroup.Item key={i}>
          {base}: {stats[base]}-{(stats[x] * 17 + stats[base]).toFixed(0)}
        </ListGroup.Item>
      ) : (
        <ListGroup.Item key={i}>
          {base}: {stats[base]}
        </ListGroup.Item>
      );
    });
  return (
    <Card style={{ width: "18rem" }} className="sameHeight">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {perlevel}
        <ListGroup.Item>Attack Speed: {attackrange}</ListGroup.Item>
        <ListGroup.Item>Movement Speed: {movespeed}</ListGroup.Item>
      </Card.Body>
    </Card>
  );
}

export default Card3;
