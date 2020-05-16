import React from "react";

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

function Champion(props) {
  if (props.info.name === "Error") return <div>Invalid Name</div>;
  let {
    name,
    title,
    image,
    skins,
    lore,
    allytips,
    enemytips,
    tags,
    partype,
    info,
    stats,
    spells,
    passive,
    recommended,
  } = props.info;


  console.log(passive)
  let strings = (
    <>
      <div>
        <Card1 value={["Title", title]} />
        <Card1 value={["Name", name]} />
      </div>
      <div>
        <Card3 value={["Stats Level 1-18", stats]} level={props.level} setLevel={props.setLevel}/>
      </div>
      <div>
        <Card2 value={["Ally Tips", allytips]} />
        <Card2 value={["Enemy Tips", enemytips]} />
        <Card1 value={["Lore", lore]} />
      </div>
      
    </>
  );

  return (
    <div className="champion">
      <div className="flex flex-col">{strings}</div>
    </div>
  );
}

export default Champion;
