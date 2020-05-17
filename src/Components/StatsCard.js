import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//stats
function StatsCard({ value }) {
  let [title, stats] = value;
  let { attackrange, movespeed } = stats;
  let formatStats = [
    "Hp",
    "Mp",
    "Armor",
    "Magic Resist",
    "Hp Regen",
    "Mp Regen",
    "Crit",
    "Attack Damage",
    "Attack Speed",
  ];
  let perlevel = Object.keys(stats)
    .filter((x) => x.includes("perlevel"))
    .map((x, i) => {
      let base = x.slice(0, x.indexOf("perlevel"));
      return stats[x] * 17 + stats[base] !== stats[base] ? (
        <ListGroup.Item key={i} className="flex space-between">
          <div>{formatStats[i]}</div>{" "}
          <div>
            {stats[base].toFixed(0)}-{(stats[x] * 17 + stats[base]).toFixed(0)}
          </div>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item key={i} className="flex space-between">
          <div>{formatStats[i]}</div> <div>{stats[base]}</div>
        </ListGroup.Item>
      );
    });
  return (
    <Card style={{ width: "18rem" }} className="sameHeight">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {perlevel}
        <ListGroup.Item className="flex space-between">
          <div>Attack Range</div> <div>{attackrange}</div>
        </ListGroup.Item>
        <ListGroup.Item className="flex space-between">
          <div>Movement Speed</div> <div>{movespeed} </div>
        </ListGroup.Item>
      </Card.Body>
    </Card>
  );
}

export default StatsCard;
