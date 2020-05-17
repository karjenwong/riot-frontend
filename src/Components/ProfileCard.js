import React from "react";
import Card from "react-bootstrap/Card";

function ProfileCard({ value }) {
  let [name, title, img] = value;
  let url = `http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/${img}.png`;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{title}</Card.Text>
        <Card.Img src={url} className="width-auto" />
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
