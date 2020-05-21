import React from "react";

import ProfileCard from "./ProfileCard";
import TipsCard from "./TipsCard";
import StatsCard from "./StatsCard";
import LoreCard from "./LoreCard";

function Champion(props) {
  if (props.info.name === "Error") return <div>Invalid Name</div>;
  let { name, title, lore, allytips, enemytips, stats, id } = props.info;

  let strings = (
    <>
      <div>
        <ProfileCard value={[name, title, id]} />
      </div>
      <div>
        <StatsCard
          value={["Stats Level 1-18", stats]}
          level={props.level}
          setLevel={props.setLevel}
        />
      </div>
      <div>
        <TipsCard value={["Ally Tips", allytips]} />
        <TipsCard value={["Enemy Tips", enemytips]} />
        <LoreCard value={["Lore", lore]} />
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
